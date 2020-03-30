INTRODUÇÃO

Este é o resultado final do desafio proposto para o processo seletivo de assistente e analista de desenvolvimento, antes de prosseguir leia e faça as instalações das ferramentas necessárias de acordo com seu sistema operacional, que estão disponíveis abaixo.


PRÉ-REQUISITOS

Os pré-requisitos são, git, docker, docker-compose, node, npm, Insomnia (ou Postman). Caso já tenha algum deles instalado, pode prosseguir, caso não tenha, segue abaixo.


Windows: 
		
Git:
Acesse msysgit.github.com, após isso irá redirecionar para a próxima página, clique em Download, e nesta página role até onde diz Assets e clique no link de acordo com seu sistema operacional (32 ou 64 bits) 
Após isso basta clicar no instalador e prosseguir com a instalação.

Nodejs e NPM:
Para o Node, vamos acessar https://nodejs.org/en/, selecionar o download LTS
O próximo passo é só abrir o instalador e seguir os passos para instalação

OBS: O npm vem instalado junto

Docker:
O download do docker pode ser feito através do link https://hub.docker.com/editions/community/docker-ce-desktop-windows/
Após o download concluído basta abrir o arquivo baixado e seguir os passos para instalação

Docker Compose:
Para o compose, o docker tem um tutorial que pode ser mais abrangente sobre como baixar, precisará de baixar o docker-toolbox, segue o link https://docs.docker.com/toolbox/toolbox_install_windows/

Insomnia:
O insomnia pode ser baixado pelo link https://insomnia.rest/download/, basta clicar em seu sistema operacional e baixar, após isso clique no arquivo baixado e siga os passos para instalação.



Linux: 
		
Git:
Para baixar o git, acesse https://git-scm.com/download/linux e rode os comandos via terminal para sua determinada distro

Nodejs e NPM:
O node pode ser instalado em cada distro descrita neste link https://nodejs.org/pt-br/download/package-manager/

Docker:
Para instalar o docker siga o tutorial abaixo para a instalação https://docs.docker.com/install/linux/docker-ce/ubuntu/

Docker Compose:
Acesse https://docs.docker.com/compose/install/ e clique em linux, após isso, siga os passos para instalação

Insomnia:
O insomnia pode ser baixado e instalado com o comando abaixo
 ~$  sudo snap install insomnia




MacOS: 
		
Git:
O git pode ser encontrado para download no seguinte link no macOS https://git-scm.com/download/mac

Nodejs e NPM:
O nodejs também pode ser baixado para macOS em https://nodejs.org/en/

Docker:
Para instalar o docker siga o tutorial abaixo para a instalação https://docs.docker.com/docker-for-mac/

Docker Compose:
Acesse https://docs.docker.com/compose/install/ e clique em MAC, após isso, siga os passos para instalação

Insomnia:
O insomnia pode ser baixado e instalado com o comando abaixo
 ~$  brew cask install insomnia


RODANDO A APLICAÇÃO

Para rodar a aplicação basta abrir o cmd ou terminal do seu sistema operacional e digitar os comandos abaixo

~$ git clone https://github.com/vvibrich/todo-api.git .
~$ npm install
~$ docker-compose up

Após isso basta abrir o endereço http://localhost/ após isso, abrirá o json com alguns todos criados, vamos conhecer como funciona aplicação


ENDPOINT

O único endpoint criado é /todos o qual pode ser feito uma CRUD completa por ele, com os seguintes métodos que podem ser testados pelo Insomnia

POST (Create):
	Endpoint: /todos
	
Parâmetro: Precisa passar no body da requisição um JSON com os campos,
        	 description e completed
	
Exemplo: 
JSON:
	{
	"description": "Meu todo",
	"completed": false
             }
	


GET (Read):
	Endpoint: /todos

	Parâmetro: Não há necessidade, basta acessar e ele irá retornar todos os todos
cadastrados


PUT (Update):
Endpoint: /todos/:id

	Parâmetro: Precisa passar no body da requisição um JSON com os campos que
deseja alterar, description e/ou completed e na URL deve ser passado o id do todo que deseja alterar

Exemplo: 
URL: http://localhost/todos/5e7d1ae7b4516634965dca49
JSON:
	{
	"description": "Meu todo",
	"completed": true
             }


DELETE (Delete):
	Endpoint: /todos/:id
	
	Parâmetro: Precisa passar na url da requisição o id do todo que deseja excluir
	
	Exemplo: 
URL: http://localhost/todos/5e7d1ae7b4516634965dca49


OBS: Os campos updatedAt e completedAt são criados automaticamente





CONSIDERAÇÕES FINAIS

Qualquer dificuldade em rodar o projeto pode entrar em contato em (51)986384088 
