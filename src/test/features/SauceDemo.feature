@SauceDemo
Feature: Proceso de compra exitoso y manejo de credenciales en Sauce Demo
    Como cliente de Sauce Demo
    Quiero iniciar sesión, agregar productos al carrito y completar una compra
    Para adquirir los productos que necesito

    Background:
        Given que el cliente accede a la página de inicio de Sauce Demo

    @login-valid
    Scenario: Inicio de sesión exitoso
        Given el cliente ingresa el usuario "standard_user" y la contraseña "secret_sauce"
        When hace clic en el botón de login
        Then debería visualizar la página de productos

    @login-invalid
    Scenario: Inicio de sesión fallido
        Given el cliente ingresa el usuario "locked_out_user" y la contraseña "secret_sauce"
        When hace clic en el botón de login
        Then debería ver un mensaje de error "Epic sadface: Sorry, this user has been locked out."

    @add-product
    Scenario: Agregar producto al carrito
        Given que el cliente inició sesión con "standard_user" y la contraseña "secret_sauce"
        When selecciona y agrega los productos al carrito
            | titleProduct             |
            | Sauce Labs Backpack      |
            | Sauce Labs Fleece Jacket |
            | Sauce Labs Onesie        |
        Then el contador del carrito debería incrementarse en "3"

    @view-cart
    Scenario: Visualizar productos en el carrito
        Given que el cliente inició sesión con "standard_user" y la contraseña "secret_sauce"
        When selecciona y agrega los productos al carrito
            | titleProduct             |
            | Sauce Labs Backpack      |
            | Sauce Labs Fleece Jacket |
            | Sauce Labs Onesie        |
        And accede al carrito desde la barra de navegación
        Then debería ver la lista de productos seleccionados

    @complete-purchase
    Scenario: Finalizar compra
        Given que el cliente inició sesión con "standard_user" y la contraseña "secret_sauce"
        And selecciona y agrega los productos al carrito
            | titleProduct             |
            | Sauce Labs Backpack      |
            | Sauce Labs Fleece Jacket |
            | Sauce Labs Onesie        |
        And accede al carrito desde la barra de navegación
        When el cliente procede a Checkout
        And ingresa sus datos personales
            | firstName | lastName | postalCode |
            | Esmith    | Doe      | 12345      |
    And continúa con el proceso de pago
    Then debería ver un mensaje de confirmación "Thank you for your order!"