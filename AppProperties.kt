package com.accenture.uka21.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding

@ConstructorBinding
@ConfigurationProperties(prefix = "app")
data class AppProperties(
    val auth: Auth,
    val oauth2: OAuth2
)

data class Auth(
    var tokenSecret: String,
    var tokenExpirationMsec: Long
)

data class OAuth2(
    val authorizedRedirectUris: List<String>,
)

data class CookieValue(
    val cookieExpireSeconds: Int
)
