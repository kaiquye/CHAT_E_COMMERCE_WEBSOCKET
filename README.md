# Chat em tempo real 📣

![teste11](https://user-images.githubusercontent.com/69175890/171301910-bc3e4bc1-c990-48a7-a0b9-08b322500819.gif)


Esta aplicação simula um chat de um e-commerce em tempo real com painal para administradores vizualizarem conversas e responderem usuarios ou eventuais clientes.

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

## Ideia 💡
Chat em **tempo real** entre **cliente e administrador** da pagina web. As mensagens são salvas na memoria ( **array** ), existe algumas funções para manipular esses dados. 
Como forma de **segurança somente ADM podem ver as mensagens salvas**, para isso ele precisa esta logado e com um Token válido.

## Sobre 📁
Projeto desenvolvido para fins de estudos e reforçar meus conhecimentos sobre eventos e o modulo socket.io.

### Esforço 🚶🏾‍♀️
Projeto desenvolvido em 4 dias.

## Linkedin
➡ https://www.linkedin.com/in/kaique-mendes-9b61381a5/
