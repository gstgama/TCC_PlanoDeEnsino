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
    public class CursoController : ControllerBase
    {
        private readonly IRepository repository;
        public CursoController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> ListarCursos()
        {
            var result = await this.repository.GetAllCursoAsync();
            return Ok(result);
        }


        [HttpGet, Route("{id}")]
        public async Task<IActionResult> BuscarCursoById(int id)
        {
            try
            {
                var retorno = await this.repository.GetCursoByIdAsync(id);

                if (retorno != null)
                {
                    return Ok(retorno);
                }
                else
                {
                    return NotFound("Curso não encontrado.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Curso Erro:{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CriarCurso([FromBody] Curso cursoModel)
        {
            try
            {
                repository.Add(cursoModel);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(cursoModel);
                }
                else
                {
                    return BadRequest("Erro ao salvar curso.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> EditarCurso([FromBody] Curso cursoModel)
        {
            try
            {
                repository.Update(cursoModel);
                if (await repository.SaveChangesAsync())
                {
                    return Ok("Curso atualizado com sucesso.");
                }
                else
                {
                    return NotFound("Curso não encontrado.");

                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarCurso(int id)
        {
            try
            {
                Curso cursoObj = new Curso() { CdCurso = id };

                repository.Delete(cursoObj);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(id);
                }
                else
                {
                    return BadRequest("Erro ao apagar curso.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }
    }
}