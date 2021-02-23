export default [
  {
    name: 'sem-rastreio-feminino',
    keyWords: ['sem rastreio', 'feminino'],
    requiredFields: [
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_PHONE',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>

Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!<br><br>

Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:<br><br>

<b>Telefone: KEY_WORD_PARTNER_PHONE<br>
E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>

Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________<br><br>

<b>KEY_WORD_PARTNER_NAME</b>, <br><br>

A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Você pode verificar o código de rastreio atualizado por favor e retornar o contato à ela?!<br><br>

<b>DADOS DA CLIENTE:<br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER</b><br><br>

Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>

Um Abraço, equipe Appmax!`
  },
  {
    name: 'sem-rastreio-masculino',
    keyWords: ['sem rastreio', 'masculino'],
    requiredFields: [
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_PHONE',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!<br><br>

Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas: <br><br>
  
<b>Telefone: KEY_WORD_PARTNER_PHONE<br>
E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________ <br><br>

<b>KEY_WORD_PARTNER_NAME</b>, <br><br>
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Você pode verificar o código de rastreio atualizado por favor e retornar o contato à ele?!<br><br>
  
<b>DADOS DO CLIENTE<br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER</b><br><br>
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>
  
Um abraço, equipe Appmax!`
  },
  {
    name: 'com-rastreio-unissex',
    keyWords: ['com rastreio', 'unissex'],
    requiredFields: [
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_TRACKING',
      'KEY_WORD_CUSTOMER_STATUSTRACKING',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do suporte ao cliente Appmax e vou te auxiliar neste atendimento!<br><br>

Entendi sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de pagamentos.<br><br>

Porém a empresa <b>KEY_WORD_PARTNER_NAME</b> disponibilizou essa informação em nosso sistema.<br><br>
  
Para consultar o status de entrega do seu pedido é necessário colocar o código de rastreio <b>KEY_WORD_CUSTOMER_TRACKING </b> no site a seguir https://track.ebanx.com/pt.<br><br>

<b>KEY_WORD_CUSTOMER_STATUSTRACKING</b>

Caso você precise de outras informações, ressalto que a empresa <b>KEY_WORD_PARTNER_NAME</b> é responsável por todas as informações sobre a sua compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo:<br><br>
  
<b>E-mail do suporte: KEY_WORD_PARTNER_EMAIL<br>
Telefone: KEY_WORD_PARTNER_PHONE</b><br><br>
  
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤ <br><br>
  
Espero ter lhe ajudado, um abraço!<br>
Equipe Appmax.`
  },
  {
    name: 'rastreio-incorreto-masculino',
    keyWords: ['rastreio', 'incorreto', 'masculino'],
    requiredFields: [
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_TRACKING',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER',
      'KEY_WORD_PARTNER_PHONE',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>

Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:<br><br>

<b>Telefone: KEY_WORD_PARTNER_PHONE<br> 
E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________<br><br>

<b>KEY_WORD_PARTNER_NAME</b>,<br><br>
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Informo que ao consultar o código de rastreio <b>(KEY_WORD_CUSTOMER_TRACKING)</b> temos o seguinte retorno <b>"KEY_WORD_TRACKING_STATUS"</b>. Você pode verificar o status da entrega ou um código de rastreio atualizado por favor e retornar o contato à ele?!<br><br>
  
<b>DADOS DO CLIENTE<br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER</b><br><br>
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>
  
Um abraço,<br>
Equipe Appmax.`
  },
  {
    name: 'rastreio-incorreto-feminino',
    keyWords: ['rastreio', 'incorreto', 'feminino'],
    requiredFields: [
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_TRACKING',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento! <br><br>

Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:<br><br>

<b>E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________<br><br>
  
<b>KEY_WORD_PARTNER_NAME</b>,<br><br>
  
A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Informo que ao consultar o código de rastreio <b>(KEY_WORD_CUSTOMER_TRACKING)</b>, temos o seguinte retorno <b>"KEY_WORD_TRACKING_STATUS"</b>. Você pode verificar o status da entrega ou um código de rastreio atualizado por favor e retornar o contato à ela?!<br><br>
  
<b>DADOS DA CLIENTE:<br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER</b><br><br>
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>
  
Um abraço,<br>
Equipe Appmax.`
  },
  {
    name: 'parceiro-negativado',
    keyWords: ['negativado'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_PARTNER_CNPJ',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_PHONE'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME!</b> Tudo bem?<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>
  
Gostaria de esclarecer que a APPMAX é uma plataforma de pagamentos, sendo responsável pela transação com cartão de crédito ou boleto bancário.<br><br>
  
A empresa que lhe vendeu o produto chama-se <b>"KEY_WORD_PARTNER_NAME"</b>. Ela é a única responsável pela entrega do produto, bem como responsável em resolver qualquer problema decorrente da venda.<br>
Informo também, que o valor da sua compra foi creditado para a empresa vendedora. Logo, conforme afirmado, os problemas decorrentes da transação devem ser diretamente resolvidos com a empresa vendedora.<br><br>
  
Então, como forma de auxiliá-lo na resolução do seu problema, sugere-se que você entre em contato com a empresa responsável, através dos seguintes canais de atendimento:<br><br>
  
<b>Razão social: KEY_WORD_PARTNER_NAME<br>
CNPJ: KEY_WORD_PARTNER_CNPJ<br>
Telefone: KEY_WORD_PARTNER_PHONE<br>
E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Permanecemos à disposição.<br>
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤<br><br>
  
Equipe APPMAX.`
  },
  {
    name: 'estorno-parceiro-fraude-cartao',
    keyWords: ['fraude', 'estorno', 'cartao'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem?<br><br>
  
Primeiramente, agradecemos o contato.<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>
  
Entendo o seu questionamento e gostaria de lhe informar que, conforme acordado com a empresa vendedora do produto <b>KEY_WORD_PARTNER_NAME</b>, estamos dando início ao processo de estorno de sua compra.<br>
O estorno se dará devido à idoneidade da empresa vendedora, visto que não está de acordo com os valores da Appmax.<br><br>
  
Para que nenhum de nossos clientes sejam prejudicados, optamos pela devolução dos valores pagos, para que não haja nenhum prejuízo pela compra intermediada por nossa plataforma.<br>
Prezando sempre pela satisfação de nossos clientes e por este motivo iremos lhe auxiliar da melhor forma.<br><br>
  
<b>Lembrando que sua compra foi feita no cartão de crédito e o estorno poderá ser visualizado no mesmo cartão que foi utilizado, em uma ou duas faturas subsequentes.<br>
O valor aparecerá com um sinal negativo, o que significa o retorno do saldo para o limite do cartão.</b><br><br>
  
Qualquer dúvida, estamos sempre à disposição.<br>
Abraço, equipe Appmax!`
  },
  {
    name: 'estorno-parceiro-fraude-boleto',
    keyWords: ['fraude', 'estorno', 'boleto'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem?<br><br>
  
Primeiramente, agradecemos o contato.<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>
Entendo o seu questionamento e gostaria de lhe informar que, conforme acordado com a empresa <b>KEY_WORD_PARTNER_NAME</b>, vendedora do produto, estamos dando início ao processo de estorno de sua compra.<br><br>

O estorno se dará devido à idoneidade da empresa vendedora, visto que não está de acordo com os valores da Appmax.<br><br>
  
Para que nenhum de nossos clientes sejam prejudicados, optamos pela devolução dos valores pagos, para que não haja nenhum prejuízo pela compra intermediada por nossa plataforma.<br>
Prezando sempre pela satisfação de nossos clientes e por este motivo iremos lhe auxiliar da melhor forma.<br><br>

<b>Como sua compra foi realizada através de boleto e o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários conforme segue abaixo:<br><br>
  
Nome completo do titular da conta:<br>
CPF:<br>
Banco:<br>
Agência:<br>
Tipo de Conta:<br>
Conta:<br><br></b>
  
<b>Lembrando:</b> A conta para depósito deve ser, obrigatoriamente, no nome do titular da compra, ou seja, o nome do comprador que consta na nota fiscal. NÃO efetuamos depósito em conta de terceiros. Além disso, a conta precisa ser registrada como pessoa física.<br><br>
  
<b>OBS: </b>Importante frisar que os dados bancários enviados para estorno, são responsabilidade do cliente, e caso estes dados estejam incorretos, será acrescido o valor de R$9,00 para reenviar o valor de seu reembolso. Pedimos que os dados sejam conferidos antes de nos encaminhar.<br><br>

Qualquer dúvida, estamos sempre à disposição.<br>
Abraço, equipe Appmax!`
  },
  {
    name: 'solicitação-cancelamento-masculino',
    keyWords: ['cancelamento', 'masculino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Tudo bem com você? Espero que sim! <br>
Me chamo KEY_WORD_USER_NAME, faço parte da equipe de suporte ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>

Entendi a sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:<br><br>

<b>E-mail do suporte:  KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________<br><br>
  
<b>KEY_WORD_PARTNER_NAME</b>,<br><br>
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa de auxílio para efetuar o cancelamento da sua compra. Você pode por favor e retornar o contato à ele para entender melhor a situação e ajudá-lo?!<br><br>
  
<b>DADOS DO CLIENTE:<br>  
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER<br><br></b>
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>
  
Um abraço,<br>
Equipe Appmax.`
  },
  {
    name: 'solicitação-cancelamento-feminino',
    keyWords: ['cancelamento', 'feminino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte da equipe de suporte ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>
  
Entendi a sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:<br><br>

<b>E-mail do suporte:  KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________<br><br>
  
<b>KEY_WORD_PARTNER_NAME</b>,<br><br>
  
A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa de auxílio para efetuar o cancelamento da sua compra. Você pode por favor e retornar o contato à ela para entender melhor a situação e ajudá-la?!<br><br>
  
<b>DADOS DA CLIENTE:<br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER<br><br></b>
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>
  
Um abraço, equipe Appmax.`
  },
  {
    name: 'duvida-ebook-pagamento-pendente',
    keyWords: ['ebook', 'pagamento'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PRODUCT_NAME',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME, </b>tudo bem?<br><br>

Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento!    <br><br>
  
É importante esclarecer que o E-book é um livro virtual bem legal! Ele é apresentado em um formato digital que pode ser lido em computadores, celulares, tablets e outros dispositivos digitais e contém diversas informações e curiosidades.<br>
Você realizou a compra do seguinte e-book: <br><br>
  
<b>"KEY_WORD_PRODUCT_NAME"</b><br><br>
  
Porém o pagamento consta como <b>PENDENTE</b>, assim que o pagamento for realizado o e-book é enviado para o e-mail cadastrado: <b>KEY_WORD_CUSTOMER_EMAIL</b>.<br><br>
  
Se o pagamento já foi efetuado, pedimos por gentileza que nos envie o comprovante de pagamento em resposta deste e-mail!<br>
Caso você tenha mais dúvidas, pode entrar em contato com a loja <b>KEY_WORD_PARTNER_NAME</b> que é a responsável pela sua venda, através do e-mail abaixo:<br><br>

<b>E-mail: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Espero ter lhe ajudado <br>
Abraço Equipe Appmax!`
  },
  {
    name: 'duvida-ebook-pagamento-confirmado',
    keyWords: ['ebook', 'envio'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PRODUCT_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem? <br><br>

Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento!<br><br>
  
É importante esclarecer que o E-book é um livro virtual bem legal! Ele é apresentado em um formato digital que pode ser lido em computadores, celulares, tablets e outros dispositivos digitais e contém diversas informações e curiosidades.<br>
Você realizou a compra do seguinte e-book:<br><br>
  
<b> "KEY_WORD_PRODUCT_NAME"<b><br><br>
  
A loja <b>KEY_WORD_PARTNER_NAME</b> responsável pela venda do produto, disponibilizou o e-book para que pudéssemos te enviar, basta clicar no link a seguir para acessar seu e-book:<br><br>

<b> COLOQUE O LINK AQUI </b><br><br>

Caso você tenha mais dúvidas, pode entrar em contato com a loja vendedora através do e-mail abaixo:<br><br>
  
<b>E-mail: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Espero ter lhe ajudado <br>
Abraço Equipe Appmax!`
  },
  {
    name: 'solicitacao-estorno-boleto',
    keyWords: ['estorno', 'boleto'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Bom dia, <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou dar sequência ao seu atendimento! <br><br>
  
Informo que solicitei o estorno da sua compra como combinado ao setor responsável.<br><br>
  
<b>Nº do pedido: KEY_WORD_CUSTOMER_ORDER</b><br><br>
   
O prazo para efetivação em sua conta bancária é de 7 a 10 dias úteis, a partir da data de hoje. <br>
Espero que sua solicitação tenha sido atendida, caso contrário, permaneço a sua disposição. <br><br>
  
Abraço, equipe Appmax!`
  },
  {
    name: 'solicitacao-dados-estorno-boleto',
    keyWords: ['estorno', 'boleto'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
    ],
    content: ` Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e darei continuidade ao seu atendimento.<br><br>
  
Conforme o combinado, caso você não fosse atendido devidamente, nós da Appmax, tomaríamos uma medida de ação, a fim de resolver o problema.<br>
  
Como o parceiro <b>KEY_WORD_PARTNER_NAME</b> não deu um retorno efetivo, vamos dar inicio ao processo de estorno de sua compra. Lembrando que sua compra foi realizada através de boleto e o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários conforme segue abaixo:<br><br>
  
<b>Nome completo do titular da conta:<br>
CPF:<br>
Banco:<br>
Agência:<br>
Tipo de Conta:<br>
Conta:<br><br></b>
  
<b>Lembrando:</b> A conta para depósito deve ser, obrigatoriamente, no nome do titular da compra, ou seja, o nome do comprador que consta na nota fiscal. NÃO efetuamos depósito em conta de terceiros. Além disso, a conta precisa ser registrada como pessoa física.<br>
<b>OBS:</b> Importante frisar que os dados bancários enviados para estorno, são responsabilidade do cliente, e caso estes dados estejam incorretos, será acrescido o valor de R$9,00 para reenviar o valor de seu reembolso. Pedimos que os dados sejam conferidos antes de nos encaminhar.<br><br>
  
<b>Aguardamos o envio de suas informações para realizar o estorno do seu pedido.</b><br><br>
  
Qualquer dúvida, estamos sempre à disposição!<br>
Abraço Equipe Appmax.`
  },
  {
    name: 'confirmacao-recebimento',
    keyWords: ['confirmacao', 'recebimento'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_CUSTOMER_TRACKING'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME!</b><br><br>
  
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! <br><br>
  
Verifiquei o código de rastreio <b>(KEY_WORD_CUSTOMER_TRACKING)</b> referente à sua compra e percebi que consta como entregue! <br><br>
  
Gostaria de questionar a você se já recebeu seu produto?<br><br>
  
Caso sim, lhe desejamos um ótimo uso deste! <br>
Ficamos a sua disposição.<br>
Atendimento Appmax <3`
  },
  {
    name: 'comprovante-estorno-cartao',
    keyWords: ['comprovante', 'estorno'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem?<br><br>
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento.<br><br>
  
Conforme combinado, informamos que foi solicitado o estorno de sua compra para administradora do seu cartão de crédito, conforme o <b>comprovante em anexo</b>.<br>
Lembramos que o estorno poderá ser visualizado no mesmo cartão utilizado na compra em forma de crédito, em uma ou duas faturas subsequentes.<br><br>
  
Esperamos que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permanecemos a sua disposição.<br><br>
  
Um abraço! <3<br>
Atendimento Appmax`
  },
  {
    name: 'comprovante-estorno-boleto',
    keyWords: ['comprovante', 'estorno', 'boleto'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem?<br><br>
  
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! <br><br>
  
Conforme o combinado, informo que foi solicitado o estorno de sua compra realizada através de boleto bancário.<br>
Anexo aqui o comprovante de transferência bancária referente ao valor do seu pedido.<br><br>
  
Esperamos que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permanecemos a sua disposição.<br>
Um abraço! <3 <br>
Atendimento Appmax`
  },
  {
    name: 'parceiro-nao-respondeu-masculino',
    keyWords: ['nao', 'respondeu'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem com você?<br><br>
    
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! <br><br>
  
Lamento em saber que a situação com a empresa vendedora <b>KEY_WORD_PARTNER_NAME</b> não se resolveu como você gostaria. Mas conforme o combinado, caso você não fosse atendido devidamente, nós da Appmax, tomaríamos uma medida de ação, a fim de resolver o problema.<br>
Com isso, venho lhe propor a opção de estorno de sua compra, caso tenha interesse, sendo assim, peço que sinalize em resposta deste email se você prefere o estorno ou aguardar pelo produto.<br><br>
  
<b>Peço que responda este email em até 48 horas.</b><br><br>
  
SELECIONE DE ACORDO COM A FORMA DE PAGAMENTO DO CLIENTE
  
Como sua compra foi feita no cartão de crédito, o estorno poderá ser visualizado no mesmo cartão que foi utilizado, em uma ou duas faturas subsequentes.<br><br>
  
Como sua compra foi realizada através de boleto, o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários.<br><br>
  
<b>Aguardamos seu retorno para seguir com o seu atendimento.</b><br><br>

Espero que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permaneço a sua disposição. Nossa resposta deve ocorrer em até 5 dias úteis.<br><br>
  
Um abraço, equipe Appmax!`
  },
  {
    name: 'parceiro-nao-respondeu-feminino',
    keyWords: ['nao', 'respondeu', 'feminino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem com você?<br>    
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! <br><br>
  
Lamento em saber que a situação com a empresa vendedora <b>KEY_WORD_PARTNER_NAME</b> não se resolveu como você gostaria. Mas conforme o combinado, caso você não fosse atendida devidamente, nós da Appmax, tomaríamos uma medida de ação, a fim de resolver o problema.<br>
Com isso, venho lhe propor a opção de estorno de sua compra, caso tenha interesse, sendo assim, peço que sinalize em resposta deste email se você prefere o estorno ou aguardar pelo produto.<br><br>
  
<b>Peço que responda este email em até 48 horas.</b><br><br>
  
SELECIONE DE ACORDO COM A FORMA DE PAGAMENTO DO CLIENTE<br><br>
  
Como sua compra foi feita no cartão de crédito, o estorno poderá ser visualizado no mesmo cartão que foi utilizado, em uma ou duas faturas subsequentes.<br><br>
  
Como sua compra foi realizada através de boleto, o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários.    <br><br>
  
<b>Aguardamos seu retorno para seguir com seu atendimento.<br></b>
Espero que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permaneço a sua disposição. Nossa resposta deve ocorrer em até 5 dias úteis.<br><br>
  
Um abraço!`
  },
  {
    name: 'boleto-pendente',
    keyWords: ['boleto', 'pendente'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem com você?<br>    
Me chamo KEY_WORD_USER_NAME, faço parte do time de atendimento da APPMAX e irei auxiliar em seu atendimento!<br><br>

Primeiramente, informo que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário. Assim, a empresa APPMAX somente intermediou a compra feita por você e o estabelecimento vendedor.<br>
A empresa que lhe vendeu o produto chama-se KEY_WORD_PARTNER_NAME, ela é a responsável em lhe fornecer todos as informações sobre a sua compra, como a emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo:<br><br>
  
<b>E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Seu pagamento consta como <b>pendente</b>, informo que o pagamento do boleto pode ser realizado em qualquer banco ou lotérica.<br>

Se o pagamento já foi efetuado, pedimos por gentileza que você nos envie o comprovante de pagamento em resposta deste e-mail.<br>
Caso não tenha mais interesse no produto, é só desconsiderar a cobrança.<br><br>
  
Espero ter tirado todas as suas dúvidas e que em breve você tenha uma nova experiência conosco!<br>
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤<br><br>
  
Um abraço, atendimento Appmax`
  },
  {
    name: 'devolucao-parceiro-masculino',
    keyWords: ['devolucao', 'parceiro', 'masculino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br>
Tudo bem com você?<br>  
Me chamo KEY_WORD_USER_NAME, faço parte do time de Suporte ao Cliente da APPMAX e irei auxiliar em seu atendimento.<br><br>

Primeiramente, peço desculpas pelo transtorno causado!<br>
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.<br><br>
  
Como forma de solucionar o seu problema, indico o contato da empresa vendedora para o seu melhor atendimento e a mesma segue em cópia em e-mails trocados.<br>
<b>E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b>
  
Espero que junto à eles seja possível esclarecer todas as suas dúvidas e solucionar quaisquer situações.<br>
_____________ <br><br>
  
<b>KEY_WORD_PARTNER_NAME</b><br><br>
  
Visto que o cliente está insatisfeito com a sua compra, estou solicitando novamente que o suporte necessário seja prestado a ele. Pode verificar, por favor?<br><br>
  
Espero ter ajudado e fico à disposição para o que for necessário!<br><br>
  
Um abraço, atendimento Appmax`
  },
  {
    name: 'devolucao-parceiro-feminino',
    keyWords: ['devolucao', 'parceiro', 'feminino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
Tudo bem com você?<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de Suporte ao Cliente da APPMAX e irei auxiliar em seu atendimento.<br><br>

Primeiramente, peço desculpas pelo transtorno causado!<br><br>
  
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.<br><br>
  
Como forma de solucionar o seu problema, indico o contato da empresa vendedora para o seu melhor atendimento e a mesma segue em cópia em e-mails trocados.<br><br>

<b>E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Espero que junto à eles seja possível esclarecer todas as suas dúvidas e solucionar quaisquer situações.<br>
_____________<br><br>

<b>KEY_WORD_PARTNER_NAME</b><br><br>
  
Visto que a Sra KEY_WORD_CUSTOMER_FIRSTNAME está insatisfeita com a sua compra, estou solicitando que o suporte necessário seja prestado a ela. Pode retornar o contato à ela e verificar, por favor?<br><br>
  
Espero ter ajudado e fico à disposição para o que for necessário!<br><br>
  
Um abraço, atendimento Appmax`
  },
  {
    name: 'boleto-pago',
    keyWords: ['boleto', 'pago'],
    requiredFields: [    
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br>
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento!<br><br>
  
Entendi sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de pagamentos.<br>
Porém a empresa <b>KEY_WORD_PARTNER_NAME</b> disponibilizou essa informação em nosso sistema.<br><br>
  
<b>Seu pagamento referente ao pedido KEY_WORD_CUSTOMER_ORDER foi confirmado!</b> <br><br>
  
Caso você precise de outras informações, ressalto que a empresa <b>KEY_WORD_PARTNER_NAME</b> é responsável por todas as informações sobre a sua compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo:<br><br>

<b>E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
 
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤<br><br>
  
Espero ter lhe ajudado, um abraço!<br>
Equipe Appmax.`
  },
  {
    name: 'estorno-nao-solicitado-cliente',
    keyWords: ['estorno', 'duvida'],
    requiredFields: [    
      'KEY_WORD_USER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_ORDER',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',  
      'KEY_WORD_CUSTOMER_FULLNAME', 
      'KEY_WORD_CUSTOMER_CPF', 
      'KEY_WORD_CUSTOMER_EMAIL', 
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br>
Tudo bem com você? Espero que sim!<br>  
Me chamo KEY_WORD_USER_NAME, faço parte do time de atendimento ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>

Entendi sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de pagamentos.<br>  
Ao consultar o seu <b>pedido de nº KEY_WORD_CUSTOMER_ORDER</b>, percebi que o mesmo foi <b>estornado</b>, estou colocando a loja <b>KEY_WORD_PARTNER_NAME</b> que é a responsável pela sua compra em cópia neste e-mail para que a mesma consiga esclarecer o motivo do estorno.<br><br>
  
Reitero que todas as informações sobre a sua compra são de responsabilidade da empresa KEY_WORD_PARTNER_NAME. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo: <br><br>

<b>E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br>
___________________<br><br>
  
<b>KEY_WORD_PARTNER_NAME</b><br><br>
  
O pedido em nome de KEY_WORD_CUSTOMER_FIRSTNAME encontra-se como estornado conforme carta de estorno em anexo, solicito por gentileza que esclareça o motivo do estorno.<br><br>
  
<b>DADOS DO CLIENTE<br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER</b><br><br>
  
Espero ter lhe ajudado, um abraço!<br>
Equipe Appmax.`
  },
  {
    name: 'parceiro-respondeu',
    keyWords: ['parceiro', 'respondeu'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
    ],
    content: `Oi <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, tudo bem?<br>  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! <br><br>
  
Fico muito feliz em saber que a loja responsável pelo seu pedido deu o seguinte retorno:<br><br>
  
<b>" COLOCAR AQUI O RETORNO DO PARCEIRO "</b><br><br>
  
Espero que junto à eles seja possível esclarecer todas as suas dúvidas e solucionar quaisquer situações através do e-mail abaixo:<br><br>

<b>E-mail: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Com isso, darei o atendimento por parte da Appmax como encerrado. Caso volte a ter alguma questão pendente, peço que retorne este e-mail para que possamos lhe auxiliar novamente.<br>
  
Agradeço imensamente sua compreensão e espero que tudo seja resolvido da melhor maneira.<br>
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤<br><br>
  
Atendimento Appmax`
  },
  {
    name: 'formulario-devolucao-feminino',
    keyWords: ['formulario', 'devolucao', 'feminino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_ORDER',
    ],
    content: `Olá <b>KEY_WORD_PARTNER_NAME</b>,<br><br>

Visto que a Sra. <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>, realizou o envio dos documentos necessários para a realização da troca/devolução do produto referente <b>ao pedido KEY_WORD_CUSTOMER_ORDER</b>, estou solicitando novamente que o suporte necessário seja prestado a ela.<br>
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.<br>
_____________<br><br>

<b>KEY_WORD_CUSTOMER_FIRSTNAME<br><br></b>
  
Ainda assim, caso você não obtenha o retorno desejado, pode me responder este e-mail a qualquer momento solicitando ajuda com sua compra.<br><br>
  
Permaneço a disposição.<br>
Abraço!<br>
KEY_WORD_USER_NAME - Suporte ao cliente Appmax`
  },
  {
    name: 'formulario-devolucao-masculino',
    keyWords: ['formulario', 'devolucao', 'masculino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_ORDER',
    ],
    content: `Olá <b>KEY_WORD_PARTNER_NAME</b>, <br><br>
  
Visto que o Sr. KEY_WORD_CUSTOMER_FIRSTNAME, realizou o envio dos documentos necessários para a realização da troca/devolução do produto referente <b>ao pedido KEY_WORD_CUSTOMER_ORDER</b>, estou solicitando novamente que o suporte necessário seja prestado a ele.<br>
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.<br>
_____________<br><br>

<b>KEY_WORD_CUSTOMER_FIRSTNAME</b><br><br>
  
Ainda assim, caso você não obtenha o retorno desejado, pode me responder este e-mail a qualquer momento solicitando ajuda com sua compra.<br><br>
  
Permaneço a disposição.<br>
Abraço!<br>
KEY_WORD_USER_NAME - Suporte ao cliente Appmax`
  },
  {
    name: 'alteracao-pedido-feminino',
    keyWords: ['alteracao','pedido', 'feminino'],
    requiredFields: [
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_PHONE',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br>
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!<br><br>

Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:<br><br>
  
<b>Telefone: KEY_WORD_PARTNER_PHONE<br>
E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________<br><br>
  
<b>KEY_WORD_PARTNER_NAME</b>,<br><br>
  
A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa realizar alterações no seu pedido. Você pode por favor retornar o contato à ela para ajustar o pedido?!<br><br>
  
<b>DADOS DA CLIENTE:<br>  
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER</b><br><br>
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>
  
Um Abraço, equipe Appmax!`
  },
  {
    name: 'alteracao-pedido-masculino',
    keyWords: ['alteracao','pedido', 'masculino'],
    requiredFields: [
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_PHONE',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br>    
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!<br><br>

Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>
Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível. E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:<br><br>
  
<b>Telefone: KEY_WORD_PARTNER_PHONE<br>
E-mail do suporte: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.<br>
_____________<br><br>
  
<b>KEY_WORD_PARTNER_NAME</b>,<br><br>
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa realizar alterações no seu pedido. Você pode por favor retornar o contato à ele para ajustar o pedido?!<br><br>
  
<b>DADOS DO CLIENTE: <br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER</b><br><br>
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br>
<b>Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email. Nossa resposta deve ocorrer em até 5 dias úteis.</b><br><br>
  
Um Abraço, equipe Appmax!`
  },
  {
    name: 'solicitacao-estorno-cartao',
    keyWords: ['solicitacao','estorno', 'cartao'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br> 
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!<br><br>

Informo que solicitei o estorno da sua compra como combinado ao nosso setor de estornos.<br><br>
  
O prazo para a <b>avaliação é de 48 horas</b>, e após a aprovação o setor de estornos lhe envia o comprovante do mesmo em seu e-mail.<br><br>
  
Espero que sua solicitação tenha sido atendida, caso contrário, permaneço a sua disposição. `
  },
  {
    name: 'aguardar-prazo',
    keyWords: ['aguardar','prazo'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME!</b><br>
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou seguir seu atendimento!<br><br>
 
Lembrando que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br>

Como estamos intermediando o contato com a empresa <b>KEY_WORD_PARTNER_NAME</b> que é a responsável pela sua compra, precisamos <b>aguardar o prazo de retorno</b> dado à ela para prosseguirmos com o atendimento por aqui. De acordo com os e-mails anteriores o prazo se encerra dia.<br><br>
  
Conto com a sua compreensão! <br><br>
  
Um abraço equipe Appmax! `
  },
  {
    name: 'email-sem-assunto',
    keyWords: ['sem','assunto'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_PARTNER_EMAIL'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br> 
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!<br><br>

Aproveito para esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.<br><br>
  
Sendo assim a empresa <b>KEY_WORD_PARTNER_NAME</b> é responsável por todas as informações sobre a compra, assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.<br><br>
  
Para suporte referente a sua compra sugerimos que você entre em contato com eles através do e-mail abaixo:<br><br>

<b>E-mail: KEY_WORD_PARTNER_EMAIL</b><br><br>
  
Espero ter lhe ajudado! <br>
Um abraço, equipe Appmax`
  },
  {
    name: 'cbk-tratativa',
    keyWords: ['cbk','tratativa'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
      'KEY_WORD_PARTNER_EMAIL',
      'KEY_WORD_PARTNER_PHONE',
      'KEY_WORD_CUSTOMER_FULLNAME',
      'KEY_WORD_CUSTOMER_CPF',
      'KEY_WORD_CUSTOMER_EMAIL',
      'KEY_WORD_CUSTOMER_ORDER'
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br>
Tudo bem com você? Espero que sim!<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento.<br><br>
  
Identifiquei que você realizou a solicitação de cancelamento da compra ao seu cartão. Porém isso só deve acontecer em casos onde você desconhece a compra. <br>
Então, para que eu possa lhe ajudar, recomendo que você retorne o contato com o cartão e confirme a compra realizada. Somente após este contato, conseguiremos tomar alguma ação por aqui.<br><br>
  
Lembrando  que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito e que a loja KEY_WORD_PARTNER_NAME é a responsável por todas as informações sobre a sua compra e você pode entrar em contato com ela através dos dados abaixo:<br><br>

<b>Telefone: KEY_WORD_PARTNER_PHONE<br>
E-mail do suporte: KEY_WORD_PARTNER_EMAIL<br><br></b>
  
Além disso, estamos colocando a loja em cópia para agilizar seu atendimento.<br>
______________________<br><br>

<b>KEY_WORD_PARTNER_NAME</b>,<br><br>
  
Sr. KEY_WORD_CUSTOMER_FIRSTNAME realizou o cancelamento com o cartão. Você pode verificar as informações do pedido, por favor e retornar o contato?<br><br>
  
<b>DADOS DO CLIENTE:<br>
NOME: KEY_WORD_CUSTOMER_FULLNAME<br>
CPF: KEY_WORD_CUSTOMER_CPF<br>
E-MAIL: KEY_WORD_CUSTOMER_EMAIL<br>
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER<br><br></b>
  
Um abraço!<br>
Equipe Appmax.`
  },
  {
    name: 'cbk-finalizado',
    keyWords: ['cbk','finalizado'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME',
    ],
    content: `Olá <b>KEY_WORD_CUSTOMER_FIRSTNAME</b>!<br><br>
Tudo bem com você?<br>
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento.<br><br>

Primeiramente, agradecemos o contato e sentimos muito pelo transtorno!<br>  
A empresa que lhe vendeu o produto é a <b>KEY_WORD_PARTNER_NAME</b>. Ela é a responsável em lhe fornecer todas as informações sobre a sua compra assim como, todo suporte necessário em eventuais dúvidas no atendimento pós-venda.<br><br>
  
Fico chateada em saber que a situação com a empresa vendedora não se resolveu como você gostaria.<br><br>
  
Mas fique tranquilo, o estorno da sua compra já foi solicitado pela nossa equipe!<br>
O estorno poderá ser visualizado no mesmo cartão que foi utilizado em até 48h após a solicitação.<br><br>
  
Espero ter tirado todas as suas dúvidas e fico à disposição para o que for necessário!<br>
Um abraço, atendimento Appmax`
  }
]
