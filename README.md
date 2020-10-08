# API para obtenção dos rendimentos de um fundo imobiliário [FII]
Este repositório foi forkado de: [https://github.com/riquellopes/fii](https://github.com/riquellopes/fii)

O repositório citado é bem antigo e estava buscando informações de uma página que estava bloqueado o scrap. Fiz algumas modificações para tornar a API mais simples e removi toda a parte do mongodb.

## Como executar?

Obs: caso queira alterar a porta, basta alterar no arquivo .env

### Via NPM:
```shell
npm install
npm start
```

### Via Docker:
```shell
docker build -t fii-service .
docker run --name fii-service -p 5000:5000 fii-service
```

### Como testar?

#### PUT http://localhost:5000/api/v1/fiis/MFII11

**Body**
```
[
	{
		"code":"MFII11",
		"baseDate":"30/09/20",
		"payDate":"15/10/20",
		"valueOnPayDate":"R$ 129,49",
		"diy":"0,78%",
		"dividend":"R$ 1,01"
	},
	{
		"code":"MFII11",
		"baseDate":"31/08/20",
		"payDate":"15/09/20",
		"valueOnPayDate":"R$ 126,25",
		"diy":"0,78%",
		"dividend":"R$ 0,98"
	},
	{
		"code":"MFII11",
		"baseDate":"31/07/20",
		"payDate":"14/08/20",
		"valueOnPayDate":"R$ 123,10",
		"diy":"0,78%",
		"dividend":"R$ 0,96"
	},
	{
		"code":"MFII11",
		"baseDate":"30/06/20",
		"payDate":"14/07/20",
		"valueOnPayDate":"R$ 125,20",
		"diy":"0,76%",
		"dividend":"R$ 0,95"
	},
	{
		"code":"MFII11",
		"baseDate":"29/05/20",
		"payDate":"15/06/20",
		"valueOnPayDate":"R$ 123,78",
		"diy":"0,82%",
		"dividend":"R$ 1,01"
	},
	{
		"code":"MFII11",
		"baseDate":"30/04/20",
		"payDate":"15/05/20",
		"valueOnPayDate":"R$ 114,00",
		"diy":"0,90%",
		"dividend":"R$ 1,03"
	},
	{
		"code":"MFII11",
		"baseDate":"31/03/20",
		"payDate":"15/04/20",
		"valueOnPayDate":"R$ 104,00",
		"diy":"0,99%",
		"dividend":"R$ 1,03"
	},
	{
		"code":"MFII11",
		"baseDate":"28/02/20",
		"payDate":"13/03/20",
		"valueOnPayDate":"R$ 128,20",
		"diy":"0,80%",
		"dividend":"R$ 1,02"
	},
	{
		"code":"MFII11",
		"baseDate":"31/01/20",
		"payDate":"14/02/20",
		"valueOnPayDate":"R$ 136,91",
		"diy":"0,73%",
		"dividend":"R$ 1,00"
	},
	{
		"code":"MFII11",
		"baseDate":"30/12/19",
		"payDate":"15/01/20",
		"valueOnPayDate":"R$ 131,96",
		"diy":"0,76%",
		"dividend":"R$ 1,00"
	}
]
```

**Respostas**

```
[200] Tudo certo. É esperado uma resposta como o do Body acima
[500] Não foi possível recuperar os dados da página
[503] Não foi possível requisitar a página ou o FII informado não existe
```
