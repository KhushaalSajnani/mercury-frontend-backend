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
                user: 'mercurypayportal@gmail.com',
                pass: 'jbyhlrawjiogglsh'
            },
            from: 'mercurypayportal@gmail.com'
        }

        // let transporter = nodemailer.createTransport(config);
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth:{
                user: 'mercurypayportal@gmail.com',
                pass: 'jbyhlrawjiogglsh'
            },
            from: 'mercurypayportal@gmail.com'
        });
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: `Mercury-Pay`,
                link: 'https://mercury-pay.com'
            }
        });
        let desc = "Description of Query:"
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
                            // Description: enquiryDescription
                        }
                    ]
                },
                intro: "We have a new update from our Website!",
                outro: `${desc.bold()} ${enquiryDescription?enquiryDescription:"No Cover Letter"}`
            }
        }
        let mail = MailGenerator.generate(response)

        let message = {
            from: '"MercuryPayPortal" <mercurypayportal@gmail.com>',
            to: 'info@mercury-pay.com',
            subject: `Mercury-Pay Enquiry For ${enquiryFor}`,
            text:'You are receiving this email because we have received a new query on Mercury-Pay!',
            html: mail
        };

        transporter.sendMail(message).then(() => {
            console.log('Success')
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