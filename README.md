<!--Recap on communicating with the server-->
client  => Http request       http response<= Server

Http => Hypertext transfer protocol => web language

by default http request send a get method

<!-- HTTP Verbs-->
PATCH
POST
GET
DELETE
PUT

<!---URL=> uniform resource locator-->
<!--- DNS - Domain naming system-->
http://www.moringaschool.com/about

<!--status code-->
100
200
300
400
500

JSON => JavaScript Object Notation => 

{
    "article": [
        {
            "id" : 1,
            "title" : "article 1",
            "content" : "hello"
        }
        {
            "id" : 1,
            "title" : "article 1",
            "content" : "hello"
        }
    ]
}

let article = {
    id : 1,
    title : "article 1",
    content : "hello"
}

article.title

<!-- API =>Application Programming Interface -->
helps two or more application to communicate

json-server => mockup of a real server

Get => get all resources => articles/
    => get single resource => articles/2

Post=> adding new resource => articles/

Delete => removing a resource => aricles/3

Patch => updating a specific existing resource => articles/3

<!-- asynchronous programming-->


