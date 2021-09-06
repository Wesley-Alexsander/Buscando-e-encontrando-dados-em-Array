/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    bookCategory: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    bookCategory: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

// ====================== Contar Categorias =================//
const totalCategory = booksByCategory.length
console.log('Aquantidade de cateforias é: ', totalCategory)

/*
  * Neste caso criamos uma constante que ira receber o numero de categorias.
 
  * Depois usamos o (.length) para contar o numero de itens dentro do array "BookByCaregory"
 
*/

//======================= Contar Books ======================//
for (let category of booksByCategory) {
  console.log('As categorias são: ', category.bookCategory)
  console.log('total de livros: ', category.books.length)
}

/*
  * Criamos uma estrutura de repetição com a função de contar as categorias.

  * Essa estrutura passa armazena dentro da variavel "category" os itens de BooksByCategory, ou seja os dois objetos.

  * Sabendo que agora a variavel "category" armazenou os dois objetos, vamos solicitar que o "category" nos retorne quais sao as categoryBooks, ou seja quais os valores desse item e que esse valor seja impresso no console.

  * No segundo console, estamos pedindo que seja impresso a quantidade de itens = (.length) dentro da propriedade "Books" dos objetos armazenados na variavel Category.
*/

//====================== Contar Autores =====================//

function countAuthors() {
  let totalAuthor = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (totalAuthor.indexOf(book.author) == -1) {
        totalAuthor.push(book.author)
      }
    }
  }

  console.log('Total de autores: ', totalAuthor.length)
}

countAuthors()

/*

  * "function countAuthors()" ==> Nesta parte do codigo, nós criamos uma função para nos passar o total de autores  
  
  * "let totalAuthor = []" ==> Dentro da função nos criamos uma variavel que recebe um array como valor.

  * "for (let category of booksByCategory)" ==> Em seguida nós criamos uma estrutura de repetição, onde a variavel "category" vai receber os dois objetos do array booksByCategory.

  * "for (let book of category.books)" ==> Apos isso, criamos outra estrutura de repetição, onde dessa vez usaremos a variavel "book" para receber a propriedade "books" dentro de category 

  * "if (totalAuthor.indexOf(book.author) == -1)" ==> Então nos criamos um if que verifica por meio do IndexOf se o array "totalAuthor" recebeu algum item da propriedade "Author" armazenada dentro de "book".

  * "Se tiver, ele força a repetição pegando o proximo, mas se  for verificado que o array "totalAuthor" é igual a -1 então significa que ele está vazio.

  * "totalAuthor.push(book.author)" ==> Caso ele esteja vazio, nós usaremos o "Push" para armazenar o valor das propriedades "Author" dentro de "totalAuthor"

*/

//================ Mostras livros por Author ===============//

function booksOfAuthor(author) {
  let AuthorBooks = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        AuthorBooks.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${AuthorBooks.join(', ')}`)
}

booksOfAuthor('Augusto Cury')

/*

  * function booksOfAuthor(author) ==> Começamos criando uma função que ira nos mostrar quais são os livros/Obras de um escritor desejado.

  *  let AuthorBooks = [] ==>  depois criamos uma variavel que recebe um array vazio.

  * for (let category of booksByCategory) ==> Em seguida nós criamos uma estrutura de repetição, onde a variavel "category" vai receber os dois objetos do array booksByCategory.

  * for (let book of category.books) ==> Apos isso, criamos outra estrutura de repetição, onde dessa vez usaremos a variavel "book" para receber a propriedade "books" dentro de category.

  * if (book.author === author) ==> Então criamos um if que verifica se o valor da propriedade "author" armazenada em "book" é extritamente igual ao valor recebido pelo parametro.

  * AuthorBooks.push(book.title) ==> Se for, então nos usamos o "push" para inserir dentro de "AuthorBooks" o valor da propriedade title armazenada dentro de "book"

  * console.log(`Livros do autor ${author}: ${AuthorBooks.join(', ')}`) ==> Nesta linha nós pedimos que nós concatenamos o author e o "AuthorBooks" com a string, e usamos o "Join(', ')" para fazer a transformação do array em string tambem, e passamos dentro dele um separados para esses itens do array que neste caso é uma virgula e um espaço em branco

  * booksOfAuthor('Augusto Cury') == > por fim executamos a função e passamos no argumento qual é o autor que queremos fazer a verificação.

 */
