import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import multer from "multer"
import * as nc from 'next-connect';


// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };


const upload = multer();
export async function GET(){
    return NextResponse.json({'request':'received'})
}

export const POST =async (req: NextRequest) =>{
    const body = await req.formData();
    // const file = body.get("file") as Blob | null; ---> working
    const file = body.get("file") as File | null;
    const name = body.get('name');
    const email = body.get('email');
    const coverLetter = body.get('coverletter');
    const phone = body.get('phone');

    const transport = nodemailer.createTransport({
        //service: "gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'mercurypayportal@gmail.com',
            pass: 'jbyhlrawjiogglsh',
        },
        from: 'mercurypayportal@gmail.com'
    });
    try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error) {
        console.error({ error });
        return;
    }

    if (!file) {
        return NextResponse.json(
            { error: "File blob is required." },
            { status: 400 }
        );
    }

    const buffer = Buffer.from(await file.arrayBuffer());


    try {
        const sendResult = await transport.sendMail({
            from: '"MercuryPayPortal" <mercurypayportal@gmail.com>',
            to: 'ksajnani2000@gmail.com',
            subject: 'Mercury-Pay - Join Us Interest Received',
            text:'You are receiving this email because we have received a new query on Mercury-Pay!',
            attachments: file? [{filename: file.name.replaceAll(" ", "_"), content: buffer}]: [],
            html: `
                <h2 style="text-align: center">We have a new update from our Career's Page! </h2>
                <br>
                <span><h4>Name: </h4> <p>${name}</p></span>
                <br>
                <span><h4>Email: </h4> <p>${email}</p></span>
                <br>
                <span><h4>Cell: </h4><p>${phone}</p></span>
                <br>
                <h4>Cover Letter: </h4>
                <p>${coverLetter? coverLetter: 'No Cover Letter'}</p>
                <span><h4>Resume: </h4><p>${file?file.name:'No Resume Attached'}</p></span>
            `,
        });
        return NextResponse.json({
            message: "Success"
        }, {
            status: 201,
        })
    } catch (error) {
        return NextResponse.json({
            message: "Failure"
        }, {
            status: 500,
        })
    }
}

