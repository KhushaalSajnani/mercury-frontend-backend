const express = require('express');
const multer = require("multer");
//const app = express();
const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');
const cors = require('cors');
const careerRouter = express.Router()

/*app.use(cors());
app.use(express.json());*/
const upload = multer();
careerRouter.post('/',upload.single('file'), (req,res)=> {
    const {name, email, phone, coverletter} = req.body;
    const file = req.file;
try {
    let config = {
        service: 'gmail',
        auth: {
            /*user: 'ksajnani2000@gmail.com',
            pass: 'jwtvjjtgzayyovyd'*/
            user: 'mercurypayportal@gmail.com',
            pass: 'ldtikglcwjouiums'
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

    let cover = "Cover Letter: "
    let response = {
        body: {
            name: 'Mercury Team',

            table:{
                data:[
                    {
                        Name: name,
                        Email: email,
                        Contact: phone,
                        // 'Cover Letter': "Cover Letter Written in the end",
                        Resume: file? 'Resume Attached':'No Attachment'
                    }
                ],
            },
            intro: "We have a new update from our Website!",
            outro: `${cover.bold()} ${coverletter?coverletter:"No Cover Letter"}`
        }
    }
    let mail = MailGenerator.generate(response)

    let message = {
        from: 'mercurypayportal@gmail.com',
        to: 'Careers@mercury-pay.com',
        subject: "Mercury-Pay - Join Us Interest Received",
        attachments: file? [{filename: file.originalname, content: file.buffer}]: [],
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


module.exports = careerRouter