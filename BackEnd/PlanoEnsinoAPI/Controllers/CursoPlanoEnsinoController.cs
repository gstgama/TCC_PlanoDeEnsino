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
    public class CursoPlanoEnsinoController : ControllerBase
    {
        private readonly IRepository repository;
        public CursoPlanoEnsinoController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet, Route("{cdDisciplina}")]
        public async Task<IActionResult> GetCursoPlanoEnsino(int cdDisciplina)
        {
            try
            {
                var cursos = await this.repository.GetAllCursosPlanoEnsinoAsync(cdDisciplina);
                var listaCursos = new List<string>();
                var contador = cursos.Length;
                for (int i = 0; i < contador; i++)
                {
                    Curso curso = await this.repository.GetCursoByIdAsync(cursos[i].CdCurso);
                    listaCursos.Add(curso.DsCurso);
                }

                if (listaCursos != null)
                {
                    return Ok(listaCursos);
                }
                else
                {
                    return BadRequest("Erro ao listar cursos.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> SalvarCursoPlanoEnsino([FromBody] CursoPlanoEnsino cursoPlanoEnsinoModel)
        {
            try
            {
                repository.Add(cursoPlanoEnsinoModel);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(cursoPlanoEnsinoModel);
                }
                else
                {
                    return BadRequest("Erro ao conectar curso e plano de ensino.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpDelete, Route("{cdCurso}/{cdDisciplina}")]
        public async Task<IActionResult> ApagarCursoPlanoEnsino(int cdCurso, int cdDisciplina)
        {
            try
            {
                var resulta = await this.repository.GetCursoPlanoEnsinoById(cdCurso, cdDisciplina);

                if (resulta != null)
                {
                    repository.Delete(resulta);
                    await repository.SaveChangesAsync();
                    return Ok("O curso e plano de ensino foram desconectados com sucesso!");
                }
                else
                {
                    return BadRequest("Erro ao desconectar curso e plano de ensino.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }
    }
}
