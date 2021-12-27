using Microsoft.AspNetCore.Mvc;
using PlanoEnsinoAPI.Data;
using PlanoEnsinoAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutorController : ControllerBase
    {
        private readonly IRepository repository;
        public AutorController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> ListarAutores()
        {
            var result = await this.repository.GetAllAutorAsync();
            return Ok(result);
        }


        [HttpGet, Route("{id}")]
        public async Task<IActionResult> BuscarAutorById(int id)
        {
            try
            {
                var retorno = await this.repository.GetAutorByIdAsync(id);

                if (retorno != null)
                {
                    return Ok(retorno);
                }
                else
                {
                    return NotFound("Autor não encontrado.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Autor Erro:{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CriarAutor([FromBody] Autor autorModel)
        {
            try
            {
                repository.Add(autorModel);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(autorModel);
                }
                else
                {
                    return BadRequest("Erro ao salvar autor.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> EditarAutor([FromBody] Autor autorModel)
        {
            try
            {
                repository.Update(autorModel);
                if (await repository.SaveChangesAsync())
                {
                    return Ok("Autor atualizado com sucesso.");
                }
                else
                {
                    return NotFound("Autor não encontrado.");

                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarAutor(int id)
        {
            try
            {
                Autor autorObj = new Autor() { CdAutor = id };

                repository.Delete(autorObj);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(id);
                }
                else
                {
                    return BadRequest("Erro ao apagar autor.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }
    }
}