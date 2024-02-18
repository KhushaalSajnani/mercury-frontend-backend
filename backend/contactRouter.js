const express = require('express');
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const contactRouter = express.Router()

contactRouter.post('/',(req,res)=>{
    const {name, email, phoneNumber,enquiryFor, enquiryDescription} = req.body

    try {
        let config = {
            service: 'gmail',
            auth: {
                user: 'ksajnani2000@gmail.com',
                pass: 'jwtvjjtgzayyovyd'
            }
        }

        let transporter = nodemailer.createTransport(config);
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: `Mercury-Pay`,
                link: 'https://mercury-pay.com'
            }
        });

        let response = {
            body: {
                name: 'Mercury Team',
                table:{
                    data:[
                        {
                            Name: name,
                            Email: email,
                            Contact: phoneNumber,
                            'Product/Service': enquiryFor,
                            Description: enquiryDescription
                        }
                    ]
                },
                intro: "We have a new update from our Website!"
            }
        }
        let mail = MailGenerator.generate(response)

        let message = {
            from: 'ksajnani2000@gmail.com',
            to: 'ksajnani2000@gmail.com',
            subject: "Testing Email",
            html: mail
        };

        transporter.sendMail(message).then(() => {
            return res.status(201).json({
                msg: "you should receive an email"
            })
        }).catch(error => {
            console.log(error)
            return res.status(500).json({error})
        });

        return res.status(200)
    }catch (e) {
        console.log(e)
    }
})

module.exports = contactRouter;