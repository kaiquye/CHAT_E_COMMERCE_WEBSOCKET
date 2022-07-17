## Chat em tempo real para lojas online  📣


![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

![gif_](https://user-images.githubusercontent.com/69175890/171302654-67f8cef0-0b7c-4417-b24c-e5a5e4354315.gif)


Esta aplicação simula um chat de um e-commerce em tempo real com painel para administradores vizualizarem conversas e responderem usuarios ou eventuais clientes.

## Construido 🛠
* Backend ( **node.js** )
  * Socket.io | **WebSocket** : configuração de conexão entre back e front    
  * JWT | **Autenticação** : validação de administradores
  * TypeScript | **SuperSet** : tipagem da linguagem
  * helmet | **Segurança** : configurando cabeçalhos de retorno
  * cors | **Segurança** : configurando quais metodos HTTP e url o servidor pode se conectar
  * knex | **Query Builder** : Conexão I/O, tratando eventuias sql inject...
  * bcrypt | **Hash password**
  * express | **Configuração do servidor**
  
* FrontEnd ( **react.js** )
  * Socket.io.client | **WebSocket** : configuração de conexão entre back e front    
  * HTML&CSS | **estilos e estrutura**

## jwt 💡
Como forma de **segurança somente ADM podem ver as mensagens salvas**, para isso ele precisa esta logado e com um Token válido.

## Sobre 📁
Projeto desenvolvido para fins de estudos e reforçar meus conhecimentos sobre eventos e o modulo socket.io.

### Esforço 🚶🏾‍♀️
Projeto desenvolvido em 4 dias.

### Autor 👨🏻‍

Kaique Mendes

## Linkedin
➡ https://www.linkedin.com/in/kaique-mendes-9b61381a5/
