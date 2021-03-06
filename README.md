# I'll Serve Soup - Backend

Server deployed at `https://sheltered-wildwood-02734.herokuapp.com/`

## Register new user
Post `/api/auth/register`

expected body:  
`
{
  username: <String>,  
  password: <String>
}
`

## Login
Post `/api/auth/login`

expected body:  
`
{  
  username: <String>,  
  password: <String>  
}
`

## Logout
Get `/api/auth/logout`

---
### Restricted

## Get all ingredients of, per user
Get `/api/ingredients`

## Get one ingredient
Get `/api/ingredients/:id`

## Get out of stock ingredients, per user
Get `/api/ingredients/out`

## Add ingredient
Post `/api/ingredients/add`

expected body:
`
{
  name: <String>
}
`

## Edit ingredient
Put `/api/ingredients/edit/:id`

expected body:
`
{
  name: <String>
}
`

## Delete ingredient
Delete `/api/ingredients/del/:id`

## Associate ingredient with user
Post `/api/ingredients/assoc`

expected body:
`
{
  ingredient_id: <Integer>,
  quantity: <String>,
  measurement_id: <Integer> || measurement_type: <String>
}
`