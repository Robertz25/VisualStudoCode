package com.accenture.uka21.security.oauth2.user

import com.accenture.uka21.exception.OAuth2AuthenticationProcessingException
import com.accenture.uka21.model.AuthProvider

class OAuth2UserInfoFactory {
    companion object{
    fun getOAuth2UserInfo(registrationId: String, attributes: Map<String, Any>): OAuth2UserInfo {
        return when {
            registrationId.equals(AuthProvider.google.toString(), ignoreCase = true) -> {
                GoogleOAuth2UserInfo(attributes)
            }
            registrationId.equals(AuthProvider.facebook.toString(), ignoreCase = true) -> {
                FacebookOAuth2UserInfo(attributes)
            }
            else -> {
                throw OAuth2AuthenticationProcessingException("Sorry! Login with $registrationId is not supported yet.")
            }
        }
    } }
}
