using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlanoEnsinoAPI.Data;
using PlanoEnsinoAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IRepository repository;

        public LoginController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]Login loginModel)
        {
            try
            {
                if (loginModel.Email == "admin" && loginModel.Senha == "admin")
                {
                    return Ok();
                }
                else
                {
                    var usuarioLogado = await this.repository.GetUsuarioByEmailAsync(loginModel.Email);

                    if (usuarioLogado == null) 
                    { 
                        return BadRequest("mensagem"); 
                    }

                    if (usuarioLogado.Status != "inativo")
                    {
                        if (usuarioLogado != null && loginModel.Senha == usuarioLogado.Senha)
                        {
                            return Ok(usuarioLogado);
                        }
                        else
                        {
                            return NotFound("Email ou senha inválido.");
                        }
                    }
                    else
                    {
                        return BadRequest("Não foi possível efetuar login.");
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message} === Não foi possivel efetuar login.");
            }
        }
    }
}
