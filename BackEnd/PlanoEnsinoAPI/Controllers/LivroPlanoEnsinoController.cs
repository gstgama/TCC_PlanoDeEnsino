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
    public class LivroPlanoEnsinoController : ControllerBase
    {
        private readonly IRepository repository;
        public LivroPlanoEnsinoController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet, Route("{cdDisciplina}/basico")]
        public async Task<IActionResult> GetLivroBasico(int cdDisciplina)
        {
            try
            {
                var livrosBasicos = await this.repository.GetAllBasicos(cdDisciplina);
                var listaBasicos = new List<string>();
                var contador = livrosBasicos.Length;

                for (int i = 0; i < contador; i++)
                {
                    Livro livroBasico = await this.repository.GetLivroByIdAsync(livrosBasicos[i].CdLivro);
                    listaBasicos.Add(livroBasico.DsLivro);
                }

                if (listaBasicos != null)
                {
                    return Ok(listaBasicos);
                }
                else
                {
                    return BadRequest("Erro ao listar livros básicos.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpGet, Route("{cdDisciplina}/complementar")]
        public async Task<IActionResult> GetLivroComplementar(int cdDisciplina)
        {
            try
            {
                var livrosComplementares = await this.repository.GetAllComplementares(cdDisciplina);
                var listaComplementares = new List<string>();
                var contador = livrosComplementares.Length;

                for (int i=0; i < contador; i++)
                {
                    Livro livroComplementar = await this.repository.GetLivroByIdAsync(livrosComplementares[i].CdLivro);
                    listaComplementares.Add(livroComplementar.DsLivro);
                }

                if (listaComplementares != null)
                {
                    return Ok(listaComplementares);
                }
                else
                {
                    return BadRequest("Erro ao listar livros complementares.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> SalvarLivroPlano([FromBody] LivroPlanoEnsino livroPlanoEnsinoModel)
        {
            try
            {
                repository.Add(livroPlanoEnsinoModel);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(livroPlanoEnsinoModel);
                }
                else
                {
                    return BadRequest("Erro ao linkar livro e plano.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpDelete, Route("{cdLivro}/{cdDisciplina}")]
        public async Task<IActionResult> ApagarLivroPlano(int cdLivro, int cdDisciplina)
        {
            try
            {
                var resulta = await this.repository.GetLivroPlanoEnsinoById(cdLivro, cdDisciplina);

                if (resulta != null)
                {
                    repository.Delete(resulta);
                    await repository.SaveChangesAsync();
                    return Ok("O livro e plano de ensino foram desconectados com sucesso!");
                }
                else
                {
                    return BadRequest("Erro ao desconectar livro e plano de ensino.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }
    }
}
