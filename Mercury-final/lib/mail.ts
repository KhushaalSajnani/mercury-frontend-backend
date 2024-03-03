import nodemailer from "nodemailer";

export async function sendMail({
                                   to,
                                   name,
                                   subject,
                                   body,
                               }: {
    to: string;
    name: string;
    subject: string;
    body: string;
}) {

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'ksajnani2000@gmail.com',
            pass: 'jwtvjjtgzayyovyd',
        },
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
            from: 'ksajnani2000@gmail.com',
            to: 'ksajnani2000@gmail.com',
            subject: 'sample email',
            html: `<h1>Hello World!</h1>`,
        });
        console.log(sendResult);
    } catch (error) {
        console.log(error);
    }
}