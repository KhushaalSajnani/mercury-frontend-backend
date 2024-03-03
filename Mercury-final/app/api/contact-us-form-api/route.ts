import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";


export async function GET(){
    return NextResponse.json({'request':'received'})
}

export const POST =async (req: NextRequest) =>{
    const body = await req.json();
    const name = body.name;
    const email = body.email;
    const enquiryDesc = body.enquiryDescription;
    const phone = body.phoneNumber;
    const enquiryFor = body.enquiryFor;

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

    try {
        const sendResult = await transport.sendMail({
            from: '"MercuryPayPortal" <mercurypayportal@gmail.com>',
            to: 'ksajnani2000@gmail.com',
            subject: `Mercury-Pay Enquiry For ${enquiryFor? enquiryFor:'Product/Service'}`,
            text:'You are receiving this email because we have received a new query on Mercury-Pay!',
            html: `
                <h2 style="text-align: center">We have a new update from our Info Page! </h2>
                <br>
                <span><h4>Name: </h4> <p>${name}</p></span>
                <br>
                <span><h4>Email: </h4> <p>${email}</p></span>
                <br>
                <span><h4>Cell: </h4><p>${phone}</p></span>
                <br>
                <span><h4>Enquiry For: </h4><p>${enquiryFor}</p></span>
                <br>
                <h4>Enquiry Description: </h4>
                <p>${enquiryDesc? enquiryDesc: 'No Enquiry Description'}</p>
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

