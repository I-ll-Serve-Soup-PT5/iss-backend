# I'll Serve Soup - Backend

expected keys for request body not yet decided.  To be added in the future

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

## Get all ingredients
Get `/api/ingredients`

## Get one ingredient?
Get `/api/ingredients/:id`

## Get out of stock ingredients
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
  quantity: <String>
}
`