---
title: Nest Payments v1.0
language_tabs:
  - javascript: Javascript
language_clients:
  - javascript: ""
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="nest-payments">Nest Payments v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API for customers and payments with Stripe.

Base URLs:

# Authentication

- HTTP Authentication, scheme: bearer An http bearer auth token is required for all secured routes. An auth grant can be obtained from `/user/login` and `/user/register`

<h1 id="nest-payments-user">User</h1>

## UserController_create

<a id="opIdUserController_create"></a>

> Code samples

```javascript
const inputBody = '{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "password": "password"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/user',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /user`

> Body parameter

```json
{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "password": "password"
}
```

<h3 id="usercontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserDto](#schemacreateuserdto)|true|none|

> Example responses

> 201 Response

```json
{
  "userId": "5f9f1c9b9c9c9c9c9c9c9c9c",
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}
```

<h3 id="usercontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ReturnUserDto](#schemareturnuserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## UserController_findAll

<a id="opIdUserController_findAll"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/user',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /user`

> Example responses

> 200 Response

```json
[
  {
    "userId": "5f9f1c9b9c9c9c9c9c9c9c9c",
    "userName": "Alan Turing",
    "email": "aturing@gmail.com",
    "customerId": "cus_1234567890"
  }
]
```

<h3 id="usercontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="usercontroller_findall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReturnUserDto](#schemareturnuserdto)]|false|none|none|
|» userId|string|true|none|The user's id in Mongodb.|
|» userName|string|true|none|The user's name.|
|» email|string|true|none|The user's email address.|
|» customerId|string|false|none|The user's Stripe customer id. Users without transactions do not have a customer id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## UserController_findOne

<a id="opIdUserController_findOne"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/user/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /user/{id}`

<h3 id="usercontroller_findone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "5f9f1c9b9c9c9c9c9c9c9c9c",
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}
```

<h3 id="usercontroller_findone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ReturnUserDto](#schemareturnuserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## UserController_update

<a id="opIdUserController_update"></a>

> Code samples

```javascript
const inputBody = '{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/user/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PATCH /user/{id}`

> Body parameter

```json
{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}
```

<h3 id="usercontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateUserDto](#schemaupdateuserdto)|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "5f9f1c9b9c9c9c9c9c9c9c9c",
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}
```

<h3 id="usercontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ReturnUserDto](#schemareturnuserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## UserController_remove

<a id="opIdUserController_remove"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/user/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /user/{id}`

<h3 id="usercontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "5f9f1c9b9c9c9c9c9c9c9c9c",
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}
```

<h3 id="usercontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ReturnUserDto](#schemareturnuserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## UserController_register

<a id="opIdUserController_register"></a>

> Code samples

```javascript
const inputBody = '{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "password": "password"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/user/register',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /user/register`

> Body parameter

```json
{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "password": "password"
}
```

<h3 id="usercontroller_register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserDto](#schemacreateuserdto)|true|none|

> Example responses

> 201 Response

```json
{
  "access_token": "string"
}
```

<h3 id="usercontroller_register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[AuthGrantDto](#schemaauthgrantdto)|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_login

<a id="opIdUserController_login"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "aturing@gmail.com",
  "password": "password"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/user/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /user/login`

> Body parameter

```json
{
  "email": "aturing@gmail.com",
  "password": "password"
}
```

<h3 id="usercontroller_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginUserDto](#schemaloginuserdto)|true|none|

> Example responses

> 201 Response

```json
{
  "access_token": "string"
}
```

<h3 id="usercontroller_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[AuthGrantDto](#schemaauthgrantdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nest-payments-payment">Payment</h1>

## PaymentController_getPayments

<a id="opIdPaymentController_getPayments"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/payment',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /payment`

> Example responses

> 200 Response

```json
[
  {
    "id": "pi_1H7jg1CZ6F7J6I8jW2Q2c2jG",
    "amount": 2000,
    "currency": "usd",
    "status": "pending",
    "paymentMethod": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG"
  }
]
```

<h3 id="paymentcontroller_getpayments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="paymentcontroller_getpayments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReturnPaymentDto](#schemareturnpaymentdto)]|false|none|none|
|» id|string|true|none|Payment Intent ID.|
|» amount|number|true|none|Amount in cents.|
|» currency|string|true|none|Currency code. See https://stripe.com/docs/currencies.|
|» status|string|true|none|Payment Intent status. See https://stripe.com/docs/payments/payment-intents#intent-statuses.|
|» paymentMethod|string|true|none|Stripe payment method|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## PaymentController_createPayment

<a id="opIdPaymentController_createPayment"></a>

> Code samples

```javascript
const inputBody = '{
  "cuid": "cjld2cjxh0000qzrmn831i7rn"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/payment',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /payment`

> Body parameter

```json
{
  "cuid": "cjld2cjxh0000qzrmn831i7rn"
}
```

<h3 id="paymentcontroller_createpayment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePaymentDto](#schemacreatepaymentdto)|true|none|

> Example responses

> 201 Response

```json
{
  "id": "pi_1H7jg1CZ6F7J6I8jW2Q2c2jG",
  "amount": 2000,
  "currency": "usd",
  "status": "pending",
  "paymentMethod": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG",
  "clientSecret": "Jreaw828oaooi3j3r"
}
```

<h3 id="paymentcontroller_createpayment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[PaymentCreatedDto](#schemapaymentcreateddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## PaymentController_getPayment

<a id="opIdPaymentController_getPayment"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/payment/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /payment/{id}`

<h3 id="paymentcontroller_getpayment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "pi_1H7jg1CZ6F7J6I8jW2Q2c2jG",
  "amount": 2000,
  "currency": "usd",
  "status": "pending",
  "paymentMethod": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG"
}
```

<h3 id="paymentcontroller_getpayment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ReturnPaymentDto](#schemareturnpaymentdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## PaymentController_confirmPayment

<a id="opIdPaymentController_confirmPayment"></a>

> Code samples

```javascript
const inputBody = '{
  "cuid": "cjld2cjxh0000qzrmn831i7rn",
  "paymentId": "pi_1H4Q2cKZ4Z4Z4Z4Z4Z4Z4Z4Z",
  "paymentMethodId": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/payment/confirm',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /payment/confirm`

> Body parameter

```json
{
  "cuid": "cjld2cjxh0000qzrmn831i7rn",
  "paymentId": "pi_1H4Q2cKZ4Z4Z4Z4Z4Z4Z4Z4Z",
  "paymentMethodId": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG"
}
```

<h3 id="paymentcontroller_confirmpayment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConfirmPaymentDto](#schemaconfirmpaymentdto)|true|none|

> Example responses

> 201 Response

```json
{
  "id": "pi_1H7jg1CZ6F7J6I8jW2Q2c2jG",
  "amount": 2000,
  "currency": "usd",
  "status": "pending",
  "paymentMethod": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG"
}
```

<h3 id="paymentcontroller_confirmpayment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ReturnPaymentDto](#schemareturnpaymentdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

# Schemas

<h2 id="tocS_CreateUserDto">CreateUserDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserdto"></a>
<a id="schema_CreateUserDto"></a>
<a id="tocScreateuserdto"></a>
<a id="tocscreateuserdto"></a>

```json
{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "password": "password"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userName|string|true|none|The user's name.|
|email|string|true|none|The user's email address.|
|password|string|true|none|The user's password.|

<h2 id="tocS_ReturnUserDto">ReturnUserDto</h2>
<!-- backwards compatibility -->
<a id="schemareturnuserdto"></a>
<a id="schema_ReturnUserDto"></a>
<a id="tocSreturnuserdto"></a>
<a id="tocsreturnuserdto"></a>

```json
{
  "userId": "5f9f1c9b9c9c9c9c9c9c9c9c",
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|The user's id in Mongodb.|
|userName|string|true|none|The user's name.|
|email|string|true|none|The user's email address.|
|customerId|string|false|none|The user's Stripe customer id. Users without transactions do not have a customer id.|

<h2 id="tocS_UpdateUserDto">UpdateUserDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserdto"></a>
<a id="schema_UpdateUserDto"></a>
<a id="tocSupdateuserdto"></a>
<a id="tocsupdateuserdto"></a>

```json
{
  "userName": "Alan Turing",
  "email": "aturing@gmail.com",
  "customerId": "cus_1234567890"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userName|string|false|none|The user's name.|
|email|string|false|none|The user's email address.|
|customerId|string|false|none|The user's Stripe customer id.|

<h2 id="tocS_AuthGrantDto">AuthGrantDto</h2>
<!-- backwards compatibility -->
<a id="schemaauthgrantdto"></a>
<a id="schema_AuthGrantDto"></a>
<a id="tocSauthgrantdto"></a>
<a id="tocsauthgrantdto"></a>

```json
{
  "access_token": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The access token.|

<h2 id="tocS_LoginUserDto">LoginUserDto</h2>
<!-- backwards compatibility -->
<a id="schemaloginuserdto"></a>
<a id="schema_LoginUserDto"></a>
<a id="tocSloginuserdto"></a>
<a id="tocsloginuserdto"></a>

```json
{
  "email": "aturing@gmail.com",
  "password": "password"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The user's email address.|
|password|string|true|none|The user's password.|

<h2 id="tocS_ReturnPaymentDto">ReturnPaymentDto</h2>
<!-- backwards compatibility -->
<a id="schemareturnpaymentdto"></a>
<a id="schema_ReturnPaymentDto"></a>
<a id="tocSreturnpaymentdto"></a>
<a id="tocsreturnpaymentdto"></a>

```json
{
  "id": "pi_1H7jg1CZ6F7J6I8jW2Q2c2jG",
  "amount": 2000,
  "currency": "usd",
  "status": "pending",
  "paymentMethod": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Payment Intent ID.|
|amount|number|true|none|Amount in cents.|
|currency|string|true|none|Currency code. See https://stripe.com/docs/currencies.|
|status|string|true|none|Payment Intent status. See https://stripe.com/docs/payments/payment-intents#intent-statuses.|
|paymentMethod|string|true|none|Stripe payment method|

<h2 id="tocS_CreatePaymentDto">CreatePaymentDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentdto"></a>
<a id="schema_CreatePaymentDto"></a>
<a id="tocScreatepaymentdto"></a>
<a id="tocscreatepaymentdto"></a>

```json
{
  "cuid": "cjld2cjxh0000qzrmn831i7rn"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cuid|string|true|none|CUID (collision resistant id) that identifies the user session. Use https://github.com/paralleldrive/cuid to generate them. This is used as an idempotency key for the payment intent creation. Thus, they should be unique foreach payment intent creation but remain constant between retries.|

<h2 id="tocS_PaymentCreatedDto">PaymentCreatedDto</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcreateddto"></a>
<a id="schema_PaymentCreatedDto"></a>
<a id="tocSpaymentcreateddto"></a>
<a id="tocspaymentcreateddto"></a>

```json
{
  "id": "pi_1H7jg1CZ6F7J6I8jW2Q2c2jG",
  "amount": 2000,
  "currency": "usd",
  "status": "pending",
  "paymentMethod": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG",
  "clientSecret": "Jreaw828oaooi3j3r"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Payment Intent ID.|
|amount|number|true|none|Amount in cents.|
|currency|string|true|none|Currency code. See https://stripe.com/docs/currencies.|
|status|string|true|none|Payment Intent status. See https://stripe.com/docs/payments/payment-intents#intent-statuses.|
|paymentMethod|string|true|none|Stripe payment method|
|clientSecret|string|true|none|Client secret for the payment intent.|

<h2 id="tocS_ConfirmPaymentDto">ConfirmPaymentDto</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmpaymentdto"></a>
<a id="schema_ConfirmPaymentDto"></a>
<a id="tocSconfirmpaymentdto"></a>
<a id="tocsconfirmpaymentdto"></a>

```json
{
  "cuid": "cjld2cjxh0000qzrmn831i7rn",
  "paymentId": "pi_1H4Q2cKZ4Z4Z4Z4Z4Z4Z4Z4Z",
  "paymentMethodId": "pm_1H7jg1CZ6F7J6I8jW2Q2c2jG"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cuid|string|true|none|CUID (collision resistant id) that identifies the user session. Use https://github.com/paralleldrive/cuid to generate them. This is used as an idempotency key for the payment intent creation. Thus, they should be unique foreach payment intent creation but remain constant between retries.|
|paymentId|string|true|none|Payment intent id.|
|paymentMethodId|string|true|none|Payment method id.|

