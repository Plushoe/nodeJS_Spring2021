const router = require("express").Router();

const nodemailer = require("nodemailer");

async function mailer(req) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.MY_SEND,
            pass: process.env.MY_PASS,
        },
    });

    transporter.verify( (error, success) => {
        if (error) {
            console.log("verify: ", error);
        }
    });

    const mailInfo = {
        from: req.body.name +
         ((req.body.company) ? req.body.company : "") +
         req.body.email,
        to: process.env.MY_MAIL,
        subject: req.body.subject,
        text: req.body.content,
    };
    console.log("mail info:", mailInfo);
    
    transporter.sendMail(mailInfo, () => {
        console.log(".sendMail()");
    });
}
router.post("/api/sendMail", (req, res) => {
    console.log("req ", req.body);
    mailer(req).catch(console.error).then(() => {
        console.log("then()");
        res.redirect("/");
    });
});

module.exports = {
    router
};