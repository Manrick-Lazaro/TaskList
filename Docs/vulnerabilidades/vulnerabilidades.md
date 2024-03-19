# Lista de vulnerabilidades

## vulnerabilidade 01

<section>
    
<br/>

![src/app/controllers/UserController.js](./imgs/show_user.png)
_src/app/controllers/UserController.js_

<br/>
    
<p>A05:2021 - 2021-Security Misconfiguration.</p>
    
<p>A razão é que o código está expondo informações sensíveis do usuário sem qualquer controle de acesso ou verificação de autenticação. Qualquer pessoa que possa fazer uma solicitação ao endpoint associado a essa função poderia potencialmente obter informações sobre um usuário apenas fornecendo um endereço de e-mail.</p>
</section>
