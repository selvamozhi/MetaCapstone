import logo from "./icons_assets/restaurant.jpg"
export default function Header(){
    return(<>
    <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
    <title><img src={logo} alt="unavailable"/></title>
    <meta property="description" content="Little Lemon restaurant provides online service and booking facilities where it provide quick access to food and Enjoy your joy in food."/>
    <meta property="og:title" content="Little Lemon Restaurant"/>
    <meta property="og:description" content="Little Lemon restaurant provides online service and booking facilities where it provide quick access to food and Enjoy your joy in food."/>
    <meta property="og:image" content={logo}/>
    </head>
    </>)
}