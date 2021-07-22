package com.accenture.uka21.controller

import com.accenture.uka21.payload.AuthResponse
import com.accenture.uka21.payload.LoginRequest
import com.accenture.uka21.repository.UserRepository
import com.accenture.uka21.security.TokenProvider
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/auth")
class AuthController(
     private var authenticationManager: AuthenticationManager,
     private var tokenProvider: TokenProvider,
     private var userRepository: UserRepository,
     private var passwordEncoder: PasswordEncoder
) {


    @PostMapping("/login")
    @CrossOrigin(origins = ["*"], exposedHeaders = ["**"])
    fun authenticateUser(@Valid @RequestBody loginRequest: LoginRequest): ResponseEntity<*> {
        val authentication: Authentication = authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(
                loginRequest.email,
                loginRequest.password
            )
        )
        SecurityContextHolder.getContext().authentication = authentication
        val token: String = tokenProvider.createToken(authentication)
        return ResponseEntity.ok(AuthResponse(token))
    }
}

