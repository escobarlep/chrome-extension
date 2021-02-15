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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!
Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.

Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:
  
Telefone: KEY_WORD_PARTNER_PHONE
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________
  
KEY_WORD_PARTNER_NAME,
  
A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Você pode verificar o código de rastreio atualizado por favor e retornar o contato à ela?!
  
DADOS DA CLIENTE:
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!
Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.

Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:
  
Telefone: KEY_WORD_PARTNER_PHONE
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________
  
KEY_WORD_PARTNER_NAME,
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Você pode verificar o código de rastreio atualizado por favor e retornar o contato à ele?!
  
DADOS DO CLIENTE
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento!
Entendi sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de pagamentos.

Porém a empresa KEY_WORD_PARTNER_NAME disponibilizou essa informação em nosso sistema.
  
Para consultar o status de entrega do seu pedido é necessário colocar o código de rastreio KEY_WORD_CUSTOMER_TRACKING no site a seguir 
KEY_WORD_CUSTOMER_STATUSTRACKING

Caso você precise de outras informações, ressalto que a empresa KEY_WORD_PARTNER_NAME é responsável por todas as informações sobre a sua compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo:
  
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
Telefone: KEY_WORD_PARTNER_PHONE
  
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤
  
Espero ter lhe ajudado, um abraço!
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento! 
Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.

Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:

Telefone: KEY_WORD_PARTNER_PHONE 
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________

KEY_WORD_PARTNER_NAME,
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Informo que ao consultar o código de rastreio (KEY_WORD_CUSTOMER_TRACKING) fornecido em nosso sistema o mesmo retorna como KEY_WORD_TRACKING_STATUS. Você pode verificar o status da entrega ou um código de rastreio atualizado por favor e retornar o contato à ele?!
  
DADOS DO CLIENTE
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
Um abraço,
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento! 
Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.

Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:

E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________
  
KEY_WORD_PARTNER_NAME,
  
A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa de informações referente à entrega do seu pedido. Informo que ao consultar o código de rastreio (KEY_WORD_CUSTOMER_TRACKING) fornecido em nosso sistema o mesmo retorna como "KEY_WORD_TRACKING_STATUS". Você pode verificar o status da entrega ou um código de rastreio atualizado por favor e retornar o contato à ela?!
  
DADOS DA CLIENTE:
  
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
Um abraço,
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME! Tudo bem?
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! 
  
Gostaria de esclarecer que a APPMAX é uma plataforma de pagamentos, sendo responsável pela transação com cartão de crédito ou boleto bancário.
  
A empresa que lhe vendeu o produto chama-se "KEY_WORD_PARTNER_NAME". Ela é a única responsável pela entrega do produto, bem como responsável em resolver qualquer problema decorrente da venda.
Informo também, que o valor da sua compra foi creditado para a empresa vendedora. Logo, conforme afirmado, os problemas decorrentes da transação devem ser diretamente resolvidos com a empresa vendedora.
  
Então, como forma de auxiliá-lo na resolução do seu problema, sugere-se que você entre em contato com a empresa responsável, através dos seguintes canais de atendimento:
  
Razão social: KEY_WORD_PARTNER_NAME
CNPJ: KEY_WORD_PARTNER_CNPJ
Telefone: KEY_WORD_PARTNER_PHONE
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Permanecemos à disposição.
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤
  
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem?
  
Primeiramente, agradecemos o contato.
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! 
  
Entendo o seu questionamento e gostaria de lhe informar que, conforme acordado com a empresa vendedora do produto KEY_WORD_PARTNER_NAME, estamos dando início ao processo de estorno de sua compra.
O estorno se dará devido à idoneidade da empresa vendedora, visto que não está de acordo com os valores da Appmax.
  
Para que nenhum de nossos clientes sejam prejudicados, optamos pela devolução dos valores pagos, para que não haja nenhum prejuízo pela compra intermediada por nossa plataforma.
Prezando sempre pela satisfação de nossos clientes e por este motivo iremos lhe auxiliar da melhor forma.
  
Lembrando que sua compra foi feita no cartão de crédito e o estorno poderá ser visualizado no mesmo cartão que foi utilizado, em uma ou duas faturas subsequentes.
O valor aparecerá com um sinal negativo, o que significa o retorno do saldo para o limite do cartão.
  
Qualquer dúvida, estamos sempre à disposição.
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem?
  
Primeiramente, agradecemos o contato.
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! 
Entendo o seu questionamento e gostaria de lhe informar que, conforme acordado com a empresa KEY_WORD_PARTNER_NAME, vendedora do produto , estamos dando início ao processo de estorno de sua compra.

O estorno se dará devido à idoneidade da empresa vendedora, visto que não está de acordo com os valores da Appmax.
  
Para que nenhum de nossos clientes sejam prejudicados, optamos pela devolução dos valores pagos, para que não haja nenhum prejuízo pela compra intermediada por nossa plataforma.
Prezando sempre pela satisfação de nossos clientes e por este motivo iremos lhe auxiliar da melhor forma.
  
Como sua compra foi realizada através de boleto e o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários conforme segue abaixo:
  
Nome completo do titular da conta:
CPF:
Banco:
Agência:
Tipo de Conta:
Conta:
  
Lembrando: A conta para depósito deve ser, obrigatoriamente, no nome do titular da compra, ou seja, o nome do comprador que consta na nota fiscal. NÃO efetuamos depósito em conta de terceiros. Além disso, a conta precisa ser registrada como pessoa física.
  
OBS: Importante frisar que os dados bancários enviados para estorno, são responsabilidade do cliente, e caso estes dados estejam incorretos, será acrescido o valor de R$9,00 para reenviar o valor de seu reembolso. Pedimos que os dados sejam conferidos antes de nos encaminhar.
Qualquer dúvida, estamos sempre à disposição.
  
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte da equipe de suporte ao cliente Appmax e vou te auxiliar neste atendimento! 
Entendi a sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.

Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
  
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:
E-mail do suporte:  KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________
  
KEY_WORD_PARTNER_NAME,
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa de auxílio para efetuar o cancelamento da sua compra. Você pode por favor e retornar o contato à ele para entender melhor a situação e ajudá-lo?!
  
DADOS DO CLIENTE:  
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
  
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
Um abraço,
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte da equipe de suporte ao cliente Appmax e vou te auxiliar neste atendimento! 
  
Entendi a sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.
Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
  
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:
E-mail do suporte:  KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________
  
KEY_WORD_PARTNER_NAME,
  
A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa de auxílio para efetuar o cancelamento da sua compra. Você pode por favor e retornar o contato à ela para entender melhor a situação e ajudá-la?!
  
DADOS DA CLIENTE:
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
Um abraço,
Equipe Appmax.`
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem?
  
Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento!    
  
É importante esclarecer que o E-book é um livro virtual bem legal! Ele é apresentado em um formato digital que pode ser lido em computadores, celulares, tablets e outros dispositivos digitais e contém diversas informações e curiosidades.
Você realizou a compra do seguinte e-book: 
  
KEY_WORD_PRODUCT_NAME
  
Porém o pagamento consta como PENDENTE, assim que o pagamento for realizado o e-book é enviado para o e-mail cadastrado: KEY_WORD_CUSTOMER_EMAIL.
  
Caso você tenha mais dúvidas, pode entrar em contato com a loja KEY_WORD_PARTNER_NAME que é a responsável pela sua venda, através do e-mail abaixo: 
E-mail: KEY_WORD_PARTNER_EMAIL
  
Espero ter lhe ajudado <3
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem?
Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento!
  
É importante esclarecer que o E-book é um livro virtual bem legal! Ele é apresentado em um formato digital que pode ser lido em computadores, celulares, tablets e outros dispositivos digitais e contém diversas informações e curiosidades.
Você realizou a compra do seguinte e-book:
  
- KEY_WORD_PRODUCT_NAME
  
A loja KEY_WORD_PARTNER_NAME responsável pela venda do produto, disponibilizou o e-book para que pudéssemos te enviar, basta clicar no link a seguir para acessar seu e-book:
  
Caso você tenha mais dúvidas, pode entrar em contato com a loja vendedora através do e-mail abaixo:
  
E-mail: KEY_WORD_PARTNER_EMAIL
  
Espero ter lhe ajudado <3
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
    content: `Bom dia, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou dar sequência ao seu atendimento! 
  
Informo que solicitei o estorno da sua compra como combinado ao setor responsável.
  
Nº do pedido: KEY_WORD_CUSTOMER_ORDER
   
O prazo para efetivação em sua conta bancária é de 7 a 10 dias úteis, a partir da data de hoje.
Espero que sua solicitação tenha sido atendida, caso contrário, permaneço a sua disposição. 
  
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
    content: ` Olá KEY_WORD_CUSTOMER_FIRSTNAME!
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e darei continuidade ao seu atendimento.
  
Conforme o combinado, caso você não fosse atendido devidamente, nós da Appmax, tomaríamos uma medida de ação, a fim de resolver o problema.
  
Como o parceiro KEY_WORD_PARTNER_NAME não deu um retorno efetivo, vamos dar inicio ao processo de estorno de sua compra. Lembrando que sua compra foi realizada através de boleto e o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários conforme segue abaixo:
  
Nome completo do titular da conta:
CPF:
Banco:
Agência:
Tipo de Conta:
Conta:
  
Lembrando: A conta para depósito deve ser, obrigatoriamente, no nome do titular da compra, ou seja, o nome do comprador que consta na nota fiscal. NÃO efetuamos depósito em conta de terceiros. Além disso, a conta precisa ser registrada como pessoa física.
OBS: Importante frisar que os dados bancários enviados para estorno, são responsabilidade do cliente, e caso estes dados estejam incorretos, será acrescido o valor de R$9,00 para reenviar o valor de seu reembolso. Pedimos que os dados sejam conferidos antes de nos encaminhar.
  
Aguardamos o envio de suas informações para realizar o estorno do seu pedido.
  
Qualquer dúvida, estamos sempre à disposição!
Abraço Equipe Appmax.`
  },
  {
    name: 'confirmacao-recebimento',
    keyWords: ['confirmacao', 'recebimento'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
    ],
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME!
  
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! 
  
Verifiquei o código de rastreio referente à sua compra e percebi que consta como entregue! 
  
Gostaria de questionar a você se já recebeu seu produto?
  
Caso sim, lhe desejamos um ótimo uso deste! 
Ficamos a sua disposição.
Atendimento Appmax <3`
  },
  {
    name: 'comprovante-estorno-cartao',
    keyWords: ['comprovante', 'estorno'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
    ],
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem?
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento.
  
Conforme combinado, informamos que foi solicitado o estorno de sua compra para administradora do seu cartão de crédito, conforme o comprovante em anexo.
Lembramos que o estorno poderá ser visualizado no mesmo cartão utilizado na compra em forma de crédito, em uma ou duas faturas subsequentes.
  
Esperamos que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permanecemos a sua disposição.
  
Um abraço! <3
Atendimento Appmax`
  },
  {
    name: 'comprovante-estorno-boleto',
    keyWords: ['comprovante', 'estorno', 'boleto'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
    ],
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem?
  
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! 
  
Conforme o combinado, informo que foi solicitado o estorno de sua compra realizada através de boleto bancário.
Anexo aqui o comprovante de transferência bancária referente ao valor do seu pedido.
  
Esperamos que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permanecemos a sua disposição.
Um abraço! <3 
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem com você?
    
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! 
  
Lamento em saber que a situação com a empresa vendedora KEY_WORD_PARTNER_NAME não se resolveu como você gostaria. Mas conforme o combinado, caso você não fosse atendido devidamente, nós da Appmax, tomaríamos uma medida de ação, a fim de resolver o problema.
Com isso, venho lhe propor a opção de estorno de sua compra, caso tenha interesse, sendo assim, peço que sinalize em resposta deste email se você prefere o estorno ou aguardar pelo produto.
  
Peço que responda este email em até 48 horas.
  
SELECIONE DE ACORDO COM A FORMA DE PAGAMENTO DO CLIENTE
  
Como sua compra foi feita no cartão de crédito, o estorno poderá ser visualizado no mesmo cartão que foi utilizado, em uma ou duas faturas subsequentes.
  
Como sua compra foi realizada através de boleto, o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários.
  
Aguardamos seu retorno!
Espero que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permaneço a sua disposição. Nossa resposta deve ocorrer em até 5 dias úteis.
  
Um abraço!`
  },
  {
    name: 'parceiro-nao-respondeu-feminino',
    keyWords: ['nao', 'respondeu', 'feminino'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME',
      'KEY_WORD_PARTNER_NAME'
    ],
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem com você?
    
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento! 
  
Lamento em saber que a situação com a empresa vendedora KEY_WORD_PARTNER_NAME não se resolveu como você gostaria. Mas conforme o combinado, caso você não fosse atendida devidamente, nós da Appmax, tomaríamos uma medida de ação, a fim de resolver o problema.
Com isso, venho lhe propor a opção de estorno de sua compra, caso tenha interesse, sendo assim, peço que sinalize em resposta deste email se você prefere o estorno ou aguardar pelo produto.
  
Peço que responda este email em até 48 horas.
  
SELECIONE DE ACORDO COM A FORMA DE PAGAMENTO DO CLIENTE
  
Como sua compra foi feita no cartão de crédito, o estorno poderá ser visualizado no mesmo cartão que foi utilizado, em uma ou duas faturas subsequentes.
  
Como sua compra foi realizada através de boleto, o prazo para estorno é de até 10 dias úteis, após o recebimento de seus dados bancários.    
  
Aguardamos seu retorno!    
Espero que em breve você tenha uma nova experiência boa conosco, e qualquer dúvida, permaneço a sua disposição. Nossa resposta deve ocorrer em até 5 dias úteis.
  
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem com você?
    
Me chamo KEY_WORD_USER_NAME, faço parte do time de atendimento da APPMAX e irei auxiliar em seu atendimento!
Primeiramente, informo que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário. Assim, a empresa APPMAX somente intermediou a compra feita por você e o estabelecimento vendedor.
  
A empresa que lhe vendeu o produto chama-se KEY_WORD_PARTNER_NAME, ela é a responsável em lhe fornecer todos as informações sobre a sua compra, como a emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo: 
  
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Seu pagamento consta como pendente, informo que o pagamento do boleto pode ser realizado em qualquer banco ou lotérica até a data do vencimento. Após o vencimento, ele tem validade de 30 dias uteis podendo ser pago no Itaú.
Caso não tenha mais interesse no produto, é só desconsiderar a cobrança.
  
Espero ter tirado todas as suas dúvidas e que em breve você tenha uma nova experiência conosco!
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤
  
Um abraço!
Atendimento Appmax`
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME!
Tudo bem com você?
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de Suporte ao Cliente da APPMAX e irei auxiliar em seu atendimento.
Primeiramente, peço desculpas pelo transtorno causado!
  
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.
  
Como forma de solucionar o seu problema, indico o contato da empresa vendedora para o seu melhor atendimento e a mesma segue em cópia em e-mails trocados.
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Espero que junto à eles seja possível esclarecer todas as suas dúvidas e solucionar quaisquer situações.
_____________
  
KEY_WORD_PARTNER_NAME
  
Visto que o cliente está insatisfeito com a sua compra, estou solicitando novamente que o suporte necessário seja prestado a ele. Pode verificar, por favor?
  
Espero ter ajudado e fico à disposição para o que for necessário!
  
Um abraço!
Atendimento Appmax`
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME!
Tudo bem com você?
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de Suporte ao Cliente da APPMAX e irei auxiliar em seu atendimento.
Primeiramente, peço desculpas pelo transtorno causado!
  
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.
  
Como forma de solucionar o seu problema, indico o contato da empresa vendedora para o seu melhor atendimento e a mesma segue em cópia em e-mails trocados.
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Espero que junto à eles seja possível esclarecer todas as suas dúvidas e solucionar quaisquer situações.
_____________
  
KEY_WORD_PARTNER_NAME
  
Visto que a Sra KEY_WORD_CUSTOMER_FIRSTNAME está insatisfeita com a sua compra, estou solicitando que o suporte necessário seja prestado a ela. Pode retornar o contato à ela e verificar, por favor?
  
Espero ter ajudado e fico à disposição para o que for necessário!
  
Um abraço!
Atendimento Appmax`
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou te auxiliar neste atendimento!
  
Entendi sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de pagamentos.
Porém a empresa KEY_WORD_PARTNER_NAME disponibilizou essa informação em nosso sistema.
  
Seu pagamento referente ao pedido KEY_WORD_CUSTOMER_ORDER foi confirmado! 
  
Caso você precise de outras informações, ressalto que a empresa KEY_WORD_PARTNER_NAME é responsável por todas as informações sobre a sua compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo:
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤
  
Espero ter lhe ajudado, um abraço!
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME!
Tudo bem com você? Espero que sim!
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de atendimento ao cliente Appmax e vou te auxiliar neste atendimento! 
Entendi sua solicitação e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de pagamentos.
  
Ao consultar o seu pedido de nº KEY_WORD_CUSTOMER_ORDER, percebi que o mesmo foi estornado, estou colocando a loja KEY_WORD_PARTNER_NAME que é a responsável pela sua compra em cópia neste e-mail para que a mesma consiga esclarecer o motivo do estorno.
  
Reitero que todas as informações sobre a sua compra são de responsabilidade da empresa KEY_WORD_PARTNER_NAME. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda. Você deve contatá-los diretamente através dos dados abaixo: 
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
___________________
  
KEY_WORD_PARTNER_NAME
  
O pedido em nome de KEY_WORD_CUSTOMER_FIRSTNAME encontra-se como estornado conforme carta de estorno em anexo, solicito por gentileza que esclareça o motivo do estorno.
  
DADOS DO CLIENTE
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER 
  
Espero ter lhe ajudado, um abraço!
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
    content: `Oi KEY_WORD_CUSTOMER_FIRSTNAME, tudo bem?
  
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento! 
  
Fico muito feliz em saber que a loja responsável pelo seu pedido deu o seguinte retorno:.
  
"  COLOCAR AQUI O RETORNO DO PARCEIRO "
  
Espero que junto à eles seja possível esclarecer todas as suas dúvidas e solucionar quaisquer situações através do e-mail abaixo:
E-mail: KEY_WORD_PARTNER_EMAIL
  
Com isso, darei o atendimento por parte da Appmax como encerrado. Caso volte a ter alguma questão pendente, peço que retorne este e-mail para que possamos lhe auxiliar novamente.
  
Agradeço imensamente sua compreensão e espero que tudo seja resolvido da melhor maneira.
Desejo um ótimo uso de seu produto, e permaneço à disposição.
Abraço!
  
Logo você receberá um e-mail automático solicitando a sua avaliação em relação ao meu atendimento. É só escolher uma nota de 0 a 10 podendo também deixar algum comentário. O seu feedback é muito importante para mim ❤
  
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
    content: `Olá KEY_WORD_PARTNER_NAME,

Visto que a Sra. KEY_WORD_CUSTOMER_FIRSTNAME, realizou o envio dos documentos necessários para a realização da troca/devolução do produto referente ao pedido KEY_WORD_CUSTOMER_ORDER, estou solicitando novamente que o suporte necessário seja prestado a ela.
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.
_____________

KEY_WORD_CUSTOMER_FIRSTNAME
  
Ainda assim, caso você não obtenha o retorno desejado, pode me responder este e-mail a qualquer momento solicitando ajuda com sua compra.
  
Permaneço a disposição.
Abraço!
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
    content: `Olá KEY_WORD_PARTNER_NAME,
  
Visto que o Sr. KEY_WORD_CUSTOMER_FIRSTNAME, realizou o envio dos documentos necessários para a realização da troca/devolução do produto referente ao pedido KEY_WORD_CUSTOMER_ORDER, estou solicitando novamente que o suporte necessário seja prestado a ele.
Ressalvo que a Appmax apenas realiza o intermédio do contato entre você cliente e a loja que lhe vendeu o produto.
_____________

KEY_WORD_CUSTOMER_FIRSTNAME
  
Ainda assim, caso você não obtenha o retorno desejado, pode me responder este e-mail a qualquer momento solicitando ajuda com sua compra.
  
Permaneço a disposição.
Abraço!
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
  
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!
Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.
  
Mas fique tranquila que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:
  
Telefone: KEY_WORD_PARTNER_PHONE
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________
  
KEY_WORD_PARTNER_NAME,
  
A Sra. KEY_WORD_CUSTOMER_FIRSTNAME precisa realizar alterações no seu pedido. Você pode por favor retornar o contato à ela para ajustar o pedido?!
  
DADOS DA CLIENTE
  
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
    
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!
Entendi seu questionamento e gostaria de esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.
  
Mas fique tranquilo que estou aqui para te ajudar! Estou intermediando o contato com a empresa vendedora, para que sua solicitação seja atendida o mais rápido possível.
E este é o e-mail para contatá-los diretamente caso você tenha mais dúvidas:
  
Telefone: KEY_WORD_PARTNER_PHONE
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Desde já, informo que caso a empresa vendedora não lhe responda, ou não resolva o seu problema satisfatoriamente no prazo de até 3 dias úteis, basta você responder esse email que seguirei com o atendimento por aqui.
_____________
  
KEY_WORD_PARTNER_NAME,
  
O Sr. KEY_WORD_CUSTOMER_FIRSTNAME precisa realizar alterações no seu pedido. Você pode por favor retornar o contato à ele para ajustar o pedido?!
  
DADOS DO CLIENTE: 
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Lembrando que sua empresa é responsável por todas as informações sobre a compra. Assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
Aguardamos o seu contato no prazo máximo de 3 dias úteis respondendo a esse email.
  
Um Abraço, equipe Appmax!`
  },
  {
    name: 'solicitacao-estorno-cartao',
    keyWords: ['solicitacao','estorno', 'cartao'],
    requiredFields: [
      'KEY_WORD_CUSTOMER_FIRSTNAME',
      'KEY_WORD_USER_NAME'
    ],
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME! 
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!
Informo que solicitei o estorno da sua compra como combinado ao nosso setor de estornos.
  
O prazo para a avaliação é de 48 horas, e após a aprovação o setor de estornos lhe envia o comprovante do mesmo em seu e-mail.
  
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME!
Me chamo KEY_WORD_USER_NAME, sou do suporte Appmax e vou seguir seu atendimento! 
Lembrando que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.
  
Como estamos intermediando o contato com a empresa KEY_WORD_PARTNER_NAME que é a responsável pela sua compra, precisamos aguardar o prazo de retorno dado à ela para prosseguirmos com o atendimento por aqui. De acordo com os e-mails anteriores o prazo se encerra dia.
  
Conto com a sua compreensão! 
  
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME! 
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte Appmax e vou te auxiliar neste atendimento!
Aproveito para esclarecer que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito ou boleto bancário, ou seja, por seu pagamento.  
  
Sendo assim a empresa KEY_WORD_PARTNER_NAME é responsável por todas as informações sobre a compra, assim como, emissão da nota fiscal, encaminhamento do rastreio, envio do produto, além de fornecer todo o suporte necessário em eventuais dúvidas de atendimento pós-venda.
  
Para suporte referente a sua compra sugerimos que você entre em contato com eles através do e-mail abaixo:
E-mail: KEY_WORD_PARTNER_EMAIL
  
Espero ter lhe ajudado! 
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
    content: `Olá, KEY_WORD_CUSTOMER_FIRSTNAME!
Tudo bem com você? Espero que sim!
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento.
  
Identifiquei que você realizou a solicitação de cancelamento da compra ao seu cartão. Porém isso só deve acontecer em casos onde você desconhece a compra. 
Então, para que eu possa lhe ajudar, recomendo que você retorne o contato com o cartão e confirme a compra realizada. Somente após este contato, conseguiremos tomar alguma ação por aqui.
  
Lembrando  que a APPMAX é uma plataforma de processamento e gerenciamento de vendas online, sendo responsável pela transação com cartão de crédito e que a loja KEY_WORD_PARTNER_NAME é a responsável por todas as informações sobre a sua compra e você pode entrar em contato com ela através dos dados abaixo:
Telefone: KEY_WORD_PARTNER_PHONE
E-mail do suporte: KEY_WORD_PARTNER_EMAIL
  
Além disso, estamos colocando a loja em cópia para agilizar seu atendimento.
______________________

KEY_WORD_PARTNER_NAME,
  
Sr. KEY_WORD_CUSTOMER_FIRSTNAME realizou o cancelamento com o cartão. Você pode verificar as informações do pedido, por favor e retornar o contato?
  
DADOS DO CLIENTE:
NOME: KEY_WORD_CUSTOMER_FULLNAME
CPF: KEY_WORD_CUSTOMER_CPF
E-MAIL: KEY_WORD_CUSTOMER_EMAIL
Nº DO PEDIDO: KEY_WORD_CUSTOMER_ORDER
  
Um abraço!
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
    content: `Olá KEY_WORD_CUSTOMER_FIRSTNAME!
Tudo bem com você?
Me chamo KEY_WORD_USER_NAME, faço parte do time de suporte ao cliente Appmax e vou te auxiliar neste atendimento.
Primeiramente, agradecemos o contato e sentimos muito pelo transtorno!
  
A empresa que lhe vendeu o produto é a KEY_WORD_PARTNER_NAME. Ela é a responsável em lhe fornecer todas as informações sobre a sua compra assim como, todo suporte necessário em eventuais dúvidas no atendimento pós-venda.
  
Fico chateada em saber que a situação com a empresa vendedora não se resolveu como você gostaria.
  
Mas fique tranquilo, o estorno da sua compra já foi solicitado pela nossa equipe!
O estorno poderá ser visualizado no mesmo cartão que foi utilizado em até 48h após a solicitação.
  
Espero ter tirado todas as suas dúvidas e fico à disposição para o que for necessário!
Um abraço
  
Atendimento Appmax`
  }
]
