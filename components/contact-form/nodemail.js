const mailer = require("nodemailer");

module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, //SSL/TLS
        auth: {
            user: 'urieligara@gmail.com',
            pass: 'Uriel#96637334@@'
        }
    });

    const mail = {
        from: `${email}`,
        to: 'urieligara@hotmail.com',
        subject: `${nome} te enviou um formulário de contato`,
        /* text: `
        Nome: ${nome}
        E-mail: ${email}
        Mensagem: ${mensagem}
        ` */
        html: `
        <div style="background: #201150;color: #fff;padding: 25px;">
        Nome: <b><span style="color: rgb(69 169 255)">${nome}</b></br></span>
        E-mail: <b><span style="color: rgb(69 169 255)">${email}</b></br></br></span>
        Mensagem: <b><span style="color: rgb(69 169 255)">${mensagem}</b></span>
        </div>
        <div style="background: #070216;height: 20px;color: #fff;padding: 20px;">Fonte: <b>Formulário de Contato
            | <span style="color: rgb(69 169 255)">Uriel - Resumo</span></b></div>
         `
    };

    if (anexo) {
        console.log(anexo);
        mail.attachments = [];
        mail.attachments.push({
            filename: anexo.originalname,
            content: anexo.buffer
        });
    }

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    });
};