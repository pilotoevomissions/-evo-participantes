# EVO Missions · Participantes

Página independente para **identificar a patrulha de um participante pelo nome**.
Não tem relação técnica com o Guia de Campo: outro endereço, outro armazenamento, outro service worker.

- **Sem dados pessoais no repositório**: a lista (`EVO_Participantes_Patrulhas.json`) é importada na página e fica só no aparelho (localStorage, chave `evo_busca_nov26_v1`).
- **Funciona offline** depois de aberta uma vez com internet.
- **Deploy**: site estático, sem build. Endereço: `…/participantes.html`. Nomes de arquivo exclusivos: não substituem nada do Guia de Campo.
- **Depois do evento**: botão "Apagar a lista deste aparelho" (LGPD).

Formato do JSON: `{"participantes":[{"nome":"…","patrulha":"…"}]}`.
