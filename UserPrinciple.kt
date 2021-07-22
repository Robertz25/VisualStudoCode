package com.accenture.uka21.security

import com.accenture.uka21.domain.UserDocument
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.oauth2.core.user.OAuth2User


class UserPrincipal(
    private val id: Long,
    private val email: String,
    private val password: String?,
    private var authority: Collection<GrantedAuthority>,
    private var attributes: Map<String, Any>?
) : OAuth2User, UserDetails {

    constructor(id: Long, email:String, password:String?, authority: Collection<GrantedAuthority>) :
            this(id,email, password, authority, null)

    companion object {
        fun create(user: UserDocument): UserPrincipal {
            return UserPrincipal(
                user.id, user.email, user.password,
                listOf<GrantedAuthority>(SimpleGrantedAuthority("ROLE_USER")),
            )
        }

        fun create(user: UserDocument, attributes:Map<String, Any>): UserPrincipal {
            return UserPrincipal(
                user.id, user.email, user.password,
                listOf<GrantedAuthority>(SimpleGrantedAuthority("ROLE_USER")),
                attributes
            )
        }
    }

    override fun getName(): String {
        return this.id.toString()
    }

    fun getId(): Long {
        return this.id
    }

    override fun getAttributes(): Map<String, Any>? {
        return this.attributes
    }

    override fun getAuthorities(): Collection<GrantedAuthority> {
        return this.authority
    }

    override fun getPassword(): String? {
        return this.password
    }

    override fun getUsername(): String {
        return this.email
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }
}





