const CONTENT = {
  A1: [
    {
      title: "Módulo 1 – Alfabeto e Fonética Hispânica",
      content: `
        <h2>El Alfabeto Español</h2>
        <p>O espanhol tem <strong>27 letras</strong>. A diferença principal em relação ao português é a letra <strong>Ñ (eñe)</strong>.</p>
        <table>
          <tr><th>Letra</th><th>Nome</th><th>Exemplo</th></tr>
          <tr><td>A</td><td>a</td><td>amigo</td></tr>
          <tr><td>B</td><td>be</td><td>barco</td></tr>
          <tr><td>C</td><td>ce</td><td>casa / ciudad</td></tr>
          <tr><td>D</td><td>de</td><td>día</td></tr>
          <tr><td>E</td><td>e</td><td>escuela</td></tr>
          <tr><td>F</td><td>efe</td><td>foto</td></tr>
          <tr><td>G</td><td>ge</td><td>gato / gente</td></tr>
          <tr><td>H</td><td>hache</td><td>hola (muda!)</td></tr>
          <tr><td>I</td><td>i</td><td>iglesia</td></tr>
          <tr><td>J</td><td>jota</td><td>jardín</td></tr>
          <tr><td>K</td><td>ka</td><td>kilo</td></tr>
          <tr><td>L</td><td>ele</td><td>libro</td></tr>
          <tr><td>LL</td><td>elle</td><td>llave</td></tr>
          <tr><td>M</td><td>eme</td><td>madre</td></tr>
          <tr><td>N</td><td>ene</td><td>noche</td></tr>
          <tr><td>Ñ</td><td>eñe</td><td>niño</td></tr>
          <tr><td>O</td><td>o</td><td>oso</td></tr>
          <tr><td>P</td><td>pe</td><td>padre</td></tr>
          <tr><td>Q</td><td>cu</td><td>queso</td></tr>
          <tr><td>R</td><td>erre</td><td>rosa / perro</td></tr>
          <tr><td>S</td><td>ese</td><td>sol</td></tr>
          <tr><td>T</td><td>te</td><td>tarde</td></tr>
          <tr><td>U</td><td>u</td><td>uva</td></tr>
          <tr><td>V</td><td>uve</td><td>vino</td></tr>
          <tr><td>W</td><td>doble uve</td><td>wifi</td></tr>
          <tr><td>X</td><td>equis</td><td>éxito</td></tr>
          <tr><td>Y</td><td>ye / i griega</td><td>yo</td></tr>
          <tr><td>Z</td><td>zeta</td><td>zapato</td></tr>
        </table>

        <h2>Fonética: sons importantes</h2>
        <div class="example-box">
          <strong>H</strong> – sempre mudo: <em>hola, hablar, hotel</em><br>
          <strong>J</strong> – som de "rr" gutural: <em>jardín, jefe, julio</em><br>
          <strong>Ñ</strong> – som de "nh": <em>niño, mañana, español</em><br>
          <strong>LL</strong> – som de "lh" ou "i": <em>llave, pollo, ella</em><br>
          <strong>RR</strong> – "r" vibrante forte: <em>perro, arroz, carro</em><br>
          <strong>C + e/i</strong> – som de "s" (na América) ou "th" (Espanha): <em>ciudad, cine</em><br>
          <strong>G + e/i</strong> – som de "j": <em>gente, gitano</em>
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> No espanhol, cada letra tem (quase sempre) apenas um som. Isso torna a leitura mais fácil do que o inglês!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual letra existe no espanhol mas NÃO existe no português?",
          options: ["W", "Ñ", "K", "Y"],
          answer: 1
        },
        {
          type: "tf",
          question: "A letra H em espanhol tem som, assim como em português.",
          answer: false
        },
        {
          type: "fill",
          question: "A palavra 'niño' contém a letra especial chamada ___.",
          answer: "eñe|ñ|Ñ"
        }
      ]
    }
    ,
    {
      title: "Módulo 2 – Saludos y Despedidas",
      content: `
        <h2>Saludos (Cumprimentos)</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>¡Hola!</td><td>Olá!</td></tr>
          <tr><td>Buenos días</td><td>Bom dia</td></tr>
          <tr><td>Buenas tardes</td><td>Boa tarde</td></tr>
          <tr><td>Buenas noches</td><td>Boa noite</td></tr>
          <tr><td>¿Cómo estás? (informal)</td><td>Como você está?</td></tr>
          <tr><td>¿Cómo está usted? (formal)</td><td>Como o senhor/a senhora está?</td></tr>
          <tr><td>¿Qué tal?</td><td>E aí? / Tudo bem?</td></tr>
          <tr><td>¿Qué hay?</td><td>O que há? / Tudo bem?</td></tr>
        </table>

        <h2>Respuestas (Respostas)</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>Muy bien, gracias</td><td>Muito bem, obrigado(a)</td></tr>
          <tr><td>Bien, ¿y tú?</td><td>Bem, e você?</td></tr>
          <tr><td>Regular</td><td>Mais ou menos</td></tr>
          <tr><td>Mal</td><td>Mal</td></tr>
        </table>

        <h2>Despedidas (Despedidas)</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>Adiós</td><td>Tchau / Adeus</td></tr>
          <tr><td>Hasta luego</td><td>Até logo</td></tr>
          <tr><td>Hasta mañana</td><td>Até amanhã</td></tr>
          <tr><td>Hasta pronto</td><td>Até logo / Até breve</td></tr>
          <tr><td>Nos vemos</td><td>A gente se vê</td></tr>
          <tr><td>Buenas noches</td><td>Boa noite (ao se despedir)</td></tr>
        </table>

        <div class="example-box">
          <strong>Diálogo:</strong><br>
          — ¡Buenos días! ¿Cómo estás?<br>
          — Bien, gracias. ¿Y tú?<br>
          — Muy bien. ¡Hasta luego!<br>
          — ¡Adiós!
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em espanhol, as perguntas e exclamações têm sinal no início (¿ e ¡) e no final (? e !).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Bom dia' em espanhol?",
          options: ["Buenas noches", "Buenos días", "Buenas tardes", "Hasta luego"],
          answer: 1
        },
        {
          type: "tf",
          question: "'¿Qué tal?' é uma forma informal de perguntar como a pessoa está.",
          answer: true
        },
        {
          type: "fill",
          question: "Para se despedir dizendo 'Até amanhã', usamos: 'Hasta ___'.",
          answer: "mañana"
        }
      ]
    },
    {
      title: "Módulo 3 – Presentarse",
      content: `
        <h2>¿Cómo te llamas? (Como você se chama?)</h2>
        <p>Para se apresentar em espanhol, usamos o verbo <strong>llamarse</strong> (chamar-se) e <strong>ser</strong> (ser).</p>
        <table>
          <tr><th>Pergunta</th><th>Resposta</th></tr>
          <tr><td>¿Cómo te llamas?</td><td>Me llamo Carlos.</td></tr>
          <tr><td>¿Cómo se llama usted?</td><td>Me llamo Ana García.</td></tr>
          <tr><td>¿Cuál es tu nombre?</td><td>Mi nombre es Pedro.</td></tr>
        </table>

        <h2>Verbo SER – presente</h2>
        <table>
          <tr><th>Pronombre</th><th>Ser</th></tr>
          <tr><td>Yo</td><td>soy</td></tr>
          <tr><td>Tú</td><td>eres</td></tr>
          <tr><td>Él / Ella / Usted</td><td>es</td></tr>
          <tr><td>Nosotros/as</td><td>somos</td></tr>
          <tr><td>Vosotros/as</td><td>sois</td></tr>
          <tr><td>Ellos/as / Ustedes</td><td>son</td></tr>
        </table>

        <h2>Frases de apresentação</h2>
        <div class="example-box">
          — ¡Hola! Me llamo María. Soy brasileña. Tengo 25 años. Soy estudiante.<br><br>
          — ¡Hola! Yo soy Juan. Soy de México. Tengo 30 años. Soy profesor.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em espanhol, os pronomes sujeito (yo, tú, él…) costumam ser omitidos, pois a conjugação verbal já indica a pessoa.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Eu me chamo' em espanhol?",
          options: ["Yo soy llamo", "Me llamo", "Mi nombre soy", "Llamo me"],
          answer: 1
        },
        {
          type: "fill",
          question: "Complete: 'Yo ___ estudiante.' (verbo ser, 1ª pessoa)",
          answer: "soy"
        },
        {
          type: "tf",
          question: "Em espanhol, é obrigatório usar o pronome sujeito (yo, tú) em todas as frases.",
          answer: false
        }
      ]
    },
    {
      title: "Módulo 4 – Información Personal",
      content: `
        <h2>Datos personales (Dados pessoais)</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el nombre</td><td>o nome</td></tr>
          <tr><td>el apellido</td><td>o sobrenome</td></tr>
          <tr><td>la edad</td><td>a idade</td></tr>
          <tr><td>la dirección</td><td>o endereço</td></tr>
          <tr><td>el teléfono</td><td>o telefone</td></tr>
          <tr><td>el correo electrónico</td><td>o e-mail</td></tr>
          <tr><td>la profesión</td><td>a profissão</td></tr>
          <tr><td>la nacionalidad</td><td>a nacionalidade</td></tr>
        </table>

        <h2>Verbo TENER – para a idade</h2>
        <table>
          <tr><th>Pronombre</th><th>Tener</th></tr>
          <tr><td>Yo</td><td>tengo</td></tr>
          <tr><td>Tú</td><td>tienes</td></tr>
          <tr><td>Él / Ella</td><td>tiene</td></tr>
          <tr><td>Nosotros</td><td>tenemos</td></tr>
          <tr><td>Ellos / Ustedes</td><td>tienen</td></tr>
        </table>

        <h2>Perguntas e respostas comuns</h2>
        <div class="example-box">
          ¿Cuántos años tienes? → Tengo 28 años.<br>
          ¿Dónde vives? → Vivo en São Paulo.<br>
          ¿A qué te dedicas? → Soy ingeniero / Trabajo en un banco.<br>
          ¿Cuál es tu número de teléfono? → Es el 011-99999-0000.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em espanhol a idade se expressa com o verbo TENER (ter), não com SER. Nunca se diz "soy 25 años"!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se pergunta a idade em espanhol?",
          options: ["¿Cuántos años eres?", "¿Qué edad tienes?", "¿Cuántos años tienes?", "B e C estão corretas"],
          answer: 3
        },
        {
          type: "tf",
          question: "Em espanhol, a idade é expressa com o verbo SER: 'Soy 20 años'.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Yo ___ 22 años.' (verbo tener)",
          answer: "tengo"
        }
      ]
    },
    {
      title: "Módulo 5 – Países y Nacionalidades",
      content: `
        <h2>Países y sus nacionalidades</h2>
        <p>Em espanhol, as nacionalidades variam de acordo com o gênero (masculino/feminino).</p>
        <table>
          <tr><th>País</th><th>Masc.</th><th>Fem.</th></tr>
          <tr><td>Brasil</td><td>brasileño</td><td>brasileña</td></tr>
          <tr><td>México</td><td>mexicano</td><td>mexicana</td></tr>
          <tr><td>Argentina</td><td>argentino</td><td>argentina</td></tr>
          <tr><td>Colombia</td><td>colombiano</td><td>colombiana</td></tr>
          <tr><td>España</td><td>español</td><td>española</td></tr>
          <tr><td>Chile</td><td>chileno</td><td>chilena</td></tr>
          <tr><td>Perú</td><td>peruano</td><td>peruana</td></tr>
          <tr><td>Venezuela</td><td>venezolano</td><td>venezolana</td></tr>
          <tr><td>Estados Unidos</td><td>estadounidense</td><td>estadounidense</td></tr>
          <tr><td>Francia</td><td>francés</td><td>francesa</td></tr>
        </table>

        <h2>Como perguntar e responder</h2>
        <div class="example-box">
          ¿De dónde eres? → Soy de Brasil. / Soy brasileño.<br>
          ¿Cuál es tu nacionalidad? → Soy argentino.<br>
          ¿De dónde es ella? → Es de España. Es española.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> As nacionalidades em espanhol NÃO se escrevem com letra maiúscula, ao contrário do inglês!<br>
          - soy brasileño &nbsp;&nbsp; ❌ soy Brasileño
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Ela é argentina' em espanhol?",
          options: ["Ella es argentina", "Ella es argentino", "Ella soy argentina", "Ella estar argentina"],
          answer: 0
        },
        {
          type: "tf",
          question: "As nacionalidades em espanhol se escrevem com letra maiúscula.",
          answer: false
        },
        {
          type: "fill",
          question: "¿De dónde eres? → Soy ___ Brasil.",
          answer: "de"
        }
      ]
    },
    {
      title: "Módulo 6 – La Familia",
      content: `
        <h2>Los miembros de la familia</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el padre / el papá</td><td>o pai</td></tr>
          <tr><td>la madre / la mamá</td><td>a mãe</td></tr>
          <tr><td>el hijo / la hija</td><td>o filho / a filha</td></tr>
          <tr><td>el hermano / la hermana</td><td>o irmão / a irmã</td></tr>
          <tr><td>el abuelo / la abuela</td><td>o avô / a avó</td></tr>
          <tr><td>el nieto / la nieta</td><td>o neto / a neta</td></tr>
          <tr><td>el tío / la tía</td><td>o tio / a tia</td></tr>
          <tr><td>el primo / la prima</td><td>o primo / a prima</td></tr>
          <tr><td>el sobrino / la sobrina</td><td>o sobrinho / a sobrinha</td></tr>
          <tr><td>el marido / la esposa</td><td>o marido / a esposa</td></tr>
          <tr><td>el suegro / la suegra</td><td>o sogro / a sogra</td></tr>
          <tr><td>el cuñado / la cuñada</td><td>o cunhado / a cunhada</td></tr>
        </table>

        <h2>Adjetivos possessivos</h2>
        <table>
          <tr><th>Português</th><th>Singular</th><th>Plural</th></tr>
          <tr><td>meu/minha</td><td>mi</td><td>mis</td></tr>
          <tr><td>teu/tua</td><td>tu</td><td>tus</td></tr>
          <tr><td>seu/sua</td><td>su</td><td>sus</td></tr>
          <tr><td>nosso/nossa</td><td>nuestro/a</td><td>nuestros/as</td></tr>
        </table>

        <div class="example-box">
          Mi madre se llama Lucia.<br>
          Tengo dos hermanos y una hermana.<br>
          Mis abuelos viven en el campo.<br>
          ¿Tienes hijos? → Sí, tengo una hija.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em espanhol, 'mi' não tem acento quando é possessivo. O acento aparece só em 'mí' (pronome: a mim).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'minha irmã' em espanhol?",
          options: ["mi hermano", "tu hermana", "mi hermana", "su hermana"],
          answer: 2
        },
        {
          type: "tf",
          question: "'El sobrino' significa 'o sobrinho' em espanhol.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: '___ abuelos viven en España.' (meus avós)",
          answer: "Mis|mis"
        }
      ]
    },
    {
      title: "Módulo 7 – Rutina Diaria",
      content: `
        <h2>Los verbos de la rutina</h2>
        <p>Para falar sobre a rotina diária usamos verbos reflexivos e regulares no <strong>presente do indicativo</strong>.</p>
        <table>
          <tr><th>Verbo</th><th>Significado</th></tr>
          <tr><td>despertarse</td><td>acordar</td></tr>
          <tr><td>levantarse</td><td>levantar-se</td></tr>
          <tr><td>ducharse</td><td>tomar banho</td></tr>
          <tr><td>desayunar</td><td>tomar café da manhã</td></tr>
          <tr><td>trabajar / estudiar</td><td>trabalhar / estudar</td></tr>
          <tr><td>almorzar</td><td>almoçar</td></tr>
          <tr><td>volver a casa</td><td>voltar para casa</td></tr>
          <tr><td>cenar</td><td>jantar</td></tr>
          <tr><td>acostarse</td><td>deitar-se</td></tr>
          <tr><td>dormir</td><td>dormir</td></tr>
        </table>

        <h2>Expressões de tempo</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>por la mañana</td><td>de manhã</td></tr>
          <tr><td>por la tarde</td><td>à tarde</td></tr>
          <tr><td>por la noche</td><td>à noite</td></tr>
          <tr><td>a las ocho</td><td>às oito horas</td></tr>
          <tr><td>primero… luego… después…</td><td>primeiro… depois… em seguida…</td></tr>
        </table>

        <div class="example-box">
          Me despierto a las siete de la mañana.<br>
          Primero me ducho y luego desayuno.<br>
          Trabajo de nueve a cinco.<br>
          Por la noche ceno con mi familia y me acuesto a las once.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Verbos reflexivos usam pronomes: me, te, se, nos, os, se. Ex: <em>yo me levanto</em>, <em>tú te levantas</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'tomar banho' em espanhol?",
          options: ["bañarse", "ducharse", "lavarse", "A e B estão corretas"],
          answer: 3
        },
        {
          type: "tf",
          question: "'Cenar' significa 'tomar café da manhã' em espanhol.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Me ___ a las siete.' (levantar-se, 1ª pessoa)",
          answer: "levanto"
        }
      ]
    },
    {
      title: "Módulo 8 – Gustos e Intereses",
      content: `
        <h2>Expressar gostos: GUSTAR</h2>
        <p>O verbo <strong>gustar</strong> funciona diferente do português. O sujeito é aquilo que agrada, e usamos pronomes indiretos.</p>
        <table>
          <tr><th>Pronombre</th><th>Forma</th><th>Exemplo</th></tr>
          <tr><td>a mí</td><td>me gusta / gustan</td><td>Me gusta el fútbol.</td></tr>
          <tr><td>a ti</td><td>te gusta / gustan</td><td>¿Te gustan las películas?</td></tr>
          <tr><td>a él/ella</td><td>le gusta / gustan</td><td>Le gusta la música.</td></tr>
          <tr><td>a nosotros</td><td>nos gusta / gustan</td><td>Nos gustan los viajes.</td></tr>
          <tr><td>a ellos</td><td>les gusta / gustan</td><td>Les gusta bailar.</td></tr>
        </table>

        <h2>Intensidade</h2>
        <table>
          <tr><th>Expresión</th><th>Significado</th></tr>
          <tr><td>Me gusta mucho</td><td>Eu gosto muito</td></tr>
          <tr><td>Me gusta bastante</td><td>Eu gosto bastante</td></tr>
          <tr><td>Me gusta un poco</td><td>Eu gosto um pouco</td></tr>
          <tr><td>No me gusta</td><td>Eu não gosto</td></tr>
          <tr><td>No me gusta nada</td><td>Eu não gosto nada</td></tr>
          <tr><td>Me encanta</td><td>Eu adoro</td></tr>
          <tr><td>Odio / Detesto</td><td>Eu odeio / detesto</td></tr>
        </table>

        <div class="example-box">
          — ¿Te gusta la música? → Sí, me encanta la música latina.<br>
          — ¿Qué deportes te gustan? → Me gusta el fútbol pero no me gusta el tenis.<br>
          — A ella le gustan mucho los libros de aventura.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Use <em>gusta</em> com singular ou verbo no infinitivo, e <em>gustan</em> com plural.<br>
          - Me gusta <u>el café</u>. / Me gustan <u>los cafés</u>. / Me gusta <u>bailar</u>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Complete: '___ gustan los animales.' (a ela)",
          options: ["Me", "Te", "Le", "Les"],
          answer: 2
        },
        {
          type: "tf",
          question: "'Me encanta' expressa um gosto mais intenso do que 'me gusta mucho'.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'No me ___ nada el ruido.' (gustar)",
          answer: "gusta"
        }
      ]
    },
    {
      title: "Módulo 9 – La Ciudad",
      content: `
        <h2>Lugares de la ciudad</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el supermercado</td><td>o supermercado</td></tr>
          <tr><td>el hospital</td><td>o hospital</td></tr>
          <tr><td>la farmacia</td><td>a farmácia</td></tr>
          <tr><td>el banco</td><td>o banco</td></tr>
          <tr><td>la biblioteca</td><td>a biblioteca</td></tr>
          <tr><td>el cine</td><td>o cinema</td></tr>
          <tr><td>el parque</td><td>o parque</td></tr>
          <tr><td>la iglesia</td><td>a igreja</td></tr>
          <tr><td>la estación de metro</td><td>a estação de metrô</td></tr>
          <tr><td>el aeropuerto</td><td>o aeroporto</td></tr>
          <tr><td>el restaurante</td><td>o restaurante</td></tr>
          <tr><td>la panadería</td><td>a padaria</td></tr>
          <tr><td>el ayuntamiento</td><td>a prefeitura</td></tr>
        </table>

        <h2>Verbo ESTAR – localização</h2>
        <p>Para indicar <strong>localização</strong>, usamos o verbo <strong>ESTAR</strong>, não SER.</p>
        <div class="example-box">
          El banco está en la calle Mayor.<br>
          ¿Dónde está la farmacia? → Está cerca del parque.<br>
          El hospital está lejos de aquí.
        </div>

        <h2>Preposições de lugar</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>cerca de</td><td>perto de</td></tr>
          <tr><td>lejos de</td><td>longe de</td></tr>
          <tr><td>al lado de</td><td>ao lado de</td></tr>
          <tr><td>enfrente de</td><td>em frente a</td></tr>
          <tr><td>entre</td><td>entre</td></tr>
          <tr><td>detrás de</td><td>atrás de</td></tr>
          <tr><td>delante de</td><td>na frente de</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> SER = características permanentes. ESTAR = localização e estados temporários.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual verbo se usa para indicar localização?",
          options: ["Ser", "Tener", "Estar", "Ir"],
          answer: 2
        },
        {
          type: "tf",
          question: "'La biblioteca' significa 'a livraria' em espanhol.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'El parque ___ cerca del banco.' (verbo estar)",
          answer: "está"
        }
      ]
    },
    {
      title: "Módulo 10 – Números, Fechas y Horas",
      content: `
        <h2>Números (0–100)</h2>
        <table>
          <tr><th>Nº</th><th>Español</th><th>Nº</th><th>Español</th></tr>
          <tr><td>0</td><td>cero</td><td>11</td><td>once</td></tr>
          <tr><td>1</td><td>uno</td><td>12</td><td>doce</td></tr>
          <tr><td>2</td><td>dos</td><td>13</td><td>trece</td></tr>
          <tr><td>3</td><td>tres</td><td>14</td><td>catorce</td></tr>
          <tr><td>4</td><td>cuatro</td><td>15</td><td>quince</td></tr>
          <tr><td>5</td><td>cinco</td><td>20</td><td>veinte</td></tr>
          <tr><td>6</td><td>seis</td><td>30</td><td>treinta</td></tr>
          <tr><td>7</td><td>siete</td><td>40</td><td>cuarenta</td></tr>
          <tr><td>8</td><td>ocho</td><td>50</td><td>cincuenta</td></tr>
          <tr><td>9</td><td>nueve</td><td>100</td><td>cien</td></tr>
          <tr><td>10</td><td>diez</td><td>1000</td><td>mil</td></tr>
        </table>

        <h2>Los días de la semana</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>lunes</td><td>segunda-feira</td></tr>
          <tr><td>martes</td><td>terça-feira</td></tr>
          <tr><td>miércoles</td><td>quarta-feira</td></tr>
          <tr><td>jueves</td><td>quinta-feira</td></tr>
          <tr><td>viernes</td><td>sexta-feira</td></tr>
          <tr><td>sábado</td><td>sábado</td></tr>
          <tr><td>domingo</td><td>domingo</td></tr>
        </table>

        <h2>Los meses</h2>
        <div class="example-box">
          enero · febrero · marzo · abril · mayo · junio<br>
          julio · agosto · septiembre · octubre · noviembre · diciembre
        </div>

        <h2>¿Qué hora es?</h2>
        <table>
          <tr><th>Hora</th><th>Expresión</th></tr>
          <tr><td>1:00</td><td>Es la una.</td></tr>
          <tr><td>2:00</td><td>Son las dos.</td></tr>
          <tr><td>3:30</td><td>Son las tres y media.</td></tr>
          <tr><td>4:15</td><td>Son las cuatro y cuarto.</td></tr>
          <tr><td>5:45</td><td>Son las seis menos cuarto.</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Use <em>Es la una</em> apenas para 1h. Para todas as outras horas: <em>Son las...</em>
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz '3:30' em espanhol?",
          options: ["Son las tres y cuarto", "Son las tres y media", "Es la tres y media", "Son las cuatro menos media"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Miércoles' é quarta-feira em espanhol.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: '___ las dos de la tarde.' (são duas horas)",
          answer: "Son"
        }
      ]
    },
    {
      title: "Módulo 11 – De Compras",
      content: `
        <h2>Vocabulário de compras</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>la tienda</td><td>a loja</td></tr>
          <tr><td>el precio</td><td>o preço</td></tr>
          <tr><td>la talla</td><td>o tamanho / o número</td></tr>
          <tr><td>el probador</td><td>o provador</td></tr>
          <tr><td>la caja</td><td>o caixa</td></tr>
          <tr><td>el descuento</td><td>o desconto</td></tr>
          <tr><td>las rebajas</td><td>as liquidações / as promoções</td></tr>
          <tr><td>caro / barato</td><td>caro / barato</td></tr>
          <tr><td>pagar</td><td>pagar</td></tr>
          <tr><td>el recibo / el ticket</td><td>o recibo / a nota</td></tr>
        </table>

        <h2>Frases úteis na loja</h2>
        <div class="example-box">
          — ¿Cuánto cuesta esto? / ¿Cuánto vale?<br>
          — Cuesta veinte euros.<br><br>
          — ¿Tiene una talla más grande?<br>
          — Lo siento, no nos queda.<br><br>
          — ¿Puedo probármelo?<br>
          — Sí, el probador está al fondo.<br><br>
          — ¿Cómo desea pagar? → En efectivo / Con tarjeta.
        </div>

        <h2>Ropa (Roupas)</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>la camisa</td><td>a camisa</td></tr>
          <tr><td>los pantalones</td><td>as calças</td></tr>
          <tr><td>el vestido</td><td>o vestido</td></tr>
          <tr><td>los zapatos</td><td>os sapatos</td></tr>
          <tr><td>el abrigo</td><td>o casaco / o abrigo</td></tr>
          <tr><td>la falda</td><td>a saia</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Para perguntar o preço use <em>¿Cuánto cuesta?</em> (singular) ou <em>¿Cuánto cuestan?</em> (plural).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se pergunta o preço de algo em espanhol?",
          options: ["¿Qué precio tiene?", "¿Cuánto cuesta?", "¿Cuánto vale?", "Todas estão corretas"],
          answer: 3
        },
        {
          type: "tf",
          question: "'Las rebajas' significa 'os recibos' em espanhol.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '¿___ desea pagar?' (Como)",
          answer: "Cómo"
        }
      ]
    },
    {
      title: "Módulo 12 – En el Restaurante",
      content: `
        <h2>Vocabulário do restaurante</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>la carta / el menú</td><td>o cardápio</td></tr>
          <tr><td>el plato del día</td><td>o prato do dia</td></tr>
          <tr><td>el primer plato</td><td>a entrada</td></tr>
          <tr><td>el segundo plato</td><td>o prato principal</td></tr>
          <tr><td>el postre</td><td>a sobremesa</td></tr>
          <tr><td>la bebida</td><td>a bebida</td></tr>
          <tr><td>la cuenta</td><td>a conta</td></tr>
          <tr><td>el camarero / la camarera</td><td>o garçom / a garçonete</td></tr>
          <tr><td>la propina</td><td>a gorjeta</td></tr>
        </table>

        <h2>Diálogo no restaurante</h2>
        <div class="example-box">
          — ¡Buenas tardes! ¿Tienen mesa para dos?<br>
          — Sí, por aquí, por favor.<br><br>
          — ¿Qué van a tomar?<br>
          — Yo quiero la ensalada y el pollo asado, por favor.<br>
          — ¿Y para beber?<br>
          — Una agua mineral, sin gas.<br><br>
          — ¿Nos trae la cuenta, por favor?<br>
          — Enseguida.
        </div>

        <h2>Frases úteis</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>Quiero / Quisiera...</td><td>Quero / Gostaria de...</td></tr>
          <tr><td>¿Qué recomienda?</td><td>O que você recomenda?</td></tr>
          <tr><td>Está muy rico/a</td><td>Está muito gostoso/a</td></tr>
          <tr><td>La cuenta, por favor</td><td>A conta, por favor</td></tr>
          <tr><td>¿Está incluido el servicio?</td><td>O serviço está incluído?</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Quisiera</em> é mais educado que <em>quiero</em> para fazer pedidos. É o equivalente a "gostaria de".
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se pede a conta em espanhol?",
          options: ["La carta, por favor", "La cuenta, por favor", "El menú, por favor", "La propina, por favor"],
          answer: 1
        },
        {
          type: "tf",
          question: "'El postre' significa 'o prato principal' em espanhol.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '___ una mesa para cuatro, por favor.' (Quisiera/Quiero)",
          answer: "Quisiera|Quiero"
        }
      ]
    },
    {
      title: "Módulo 13 – Pedir Direcciones",
      content: `
        <h2>Pedir e dar direções</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>¿Cómo llego a...?</td><td>Como chego a...?</td></tr>
          <tr><td>¿Dónde está...?</td><td>Onde fica...?</td></tr>
          <tr><td>Gire a la derecha</td><td>Vire à direita</td></tr>
          <tr><td>Gire a la izquierda</td><td>Vire à esquerda</td></tr>
          <tr><td>Siga recto / todo recto</td><td>Siga em frente</td></tr>
          <tr><td>Cruce la calle</td><td>Atravesse a rua</td></tr>
          <tr><td>Tome la primera calle</td><td>Pegue a primeira rua</td></tr>
          <tr><td>Está a dos manzanas</td><td>Fica a dois quarteirões</td></tr>
          <tr><td>Está cerca / lejos</td><td>Fica perto / longe</td></tr>
        </table>

        <h2>Referências de lugar</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>la esquina</td><td>a esquina</td></tr>
          <tr><td>el semáforo</td><td>o semáforo</td></tr>
          <tr><td>la rotonda</td><td>a rotatória</td></tr>
          <tr><td>el cruce / la intersección</td><td>o cruzamento</td></tr>
          <tr><td>la acera / la vereda</td><td>a calçada</td></tr>
        </table>

        <div class="example-box">
          — Perdona, ¿sabes dónde está el banco?<br>
          — Sí, sigue todo recto, gira a la derecha en el semáforo y está en la esquina.<br>
          — ¿Está lejos?<br>
          — No, está a cinco minutos a pie.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Para pedir desculpas e chamar a atenção de alguém na rua, use <em>Perdona</em> (informal) ou <em>Perdone</em> (formal).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Vire à esquerda' em espanhol?",
          options: ["Gire a la derecha", "Siga recto", "Gire a la izquierda", "Cruce la calle"],
          answer: 2
        },
        {
          type: "tf",
          question: "'La manzana' no contexto de direções significa 'quarteirão'.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'Siga ___ hasta el semáforo.' (em frente)",
          answer: "recto|todo recto"
        }
      ]
    },
    {
      title: "Módulo 14 – Expresiones de Cortesía",
      content: `
        <h2>Fórmulas de cortesia</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>Por favor</td><td>Por favor</td></tr>
          <tr><td>Gracias / Muchas gracias</td><td>Obrigado(a) / Muito obrigado(a)</td></tr>
          <tr><td>De nada / No hay de qué</td><td>De nada</td></tr>
          <tr><td>Perdona / Perdone</td><td>Com licença / Desculpe</td></tr>
          <tr><td>Lo siento / Lo siento mucho</td><td>Sinto muito / Me desculpe</td></tr>
          <tr><td>Con permiso</td><td>Com licença (para passar)</td></tr>
          <tr><td>Disculpe</td><td>Desculpe</td></tr>
          <tr><td>¡Salud!</td><td>Saúde! (ao espirrar ou brindar)</td></tr>
          <tr><td>¡Buen provecho!</td><td>Bom apetite!</td></tr>
          <tr><td>¡Buena suerte!</td><td>Boa sorte!</td></tr>
        </table>

        <h2>Formal vs. Informal</h2>
        <p>Em espanhol existe distinção entre tratamento formal (<strong>usted</strong>) e informal (<strong>tú</strong>).</p>
        <table>
          <tr><th>Situação</th><th>Use</th></tr>
          <tr><td>Amigos, família, crianças</td><td>tú (tuteo)</td></tr>
          <tr><td>Desconhecidos adultos, chefes, idosos</td><td>usted (tratamento formal)</td></tr>
          <tr><td>Na América Latina (plural)</td><td>ustedes</td></tr>
          <tr><td>Na Espanha (plural informal)</td><td>vosotros</td></tr>
        </table>

        <div class="example-box">
          Informal: ¿Puedes ayudarme? (Você pode me ajudar?)<br>
          Formal: ¿Puede usted ayudarme? (O senhor pode me ajudar?)
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Lo siento</em> = sinto muito (empatia/pedido de desculpa). <em>Perdona</em> = desculpe (para chamar atenção ou pedir licença).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "O que se diz quando alguém espirra em espanhol?",
          options: ["¡Buen provecho!", "¡Salud!", "¡Buena suerte!", "Con permiso"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Usted' é usado para tratamento informal com amigos.",
          answer: false
        },
        {
          type: "fill",
          question: "Para pedir licença ao passar por alguém, diz-se: '___ permiso.'",
          answer: "Con"
        }
      ]
    },
    {
      title: "Módulo 15 – Cultura Hispana",
      content: `
        <h2>El mundo hispanohablante</h2>
        <p>O espanhol é falado em <strong>21 países</strong> como língua oficial, com mais de <strong>500 milhões</strong> de falantes nativos.</p>
        <table>
          <tr><th>Região</th><th>Países</th></tr>
          <tr><td>Europa</td><td>España</td></tr>
          <tr><td>América do Norte</td><td>México</td></tr>
          <tr><td>América Central</td><td>Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Panamá</td></tr>
          <tr><td>Caribe</td><td>Cuba, República Dominicana, Puerto Rico</td></tr>
          <tr><td>América do Sul</td><td>Colombia, Venezuela, Ecuador, Perú, Bolivia, Chile, Argentina, Uruguay, Paraguay</td></tr>
          <tr><td>África</td><td>Guinea Ecuatorial</td></tr>
        </table>

        <h2>Diferenças culturais importantes</h2>
        <div class="example-box">
           <strong>Horários:</strong> Na Espanha, o almoço é entre 14h–16h e o jantar depois das 21h.<br><br>
           <strong>Cumprimentos:</strong> Na Espanha se dão dois beijos nas bochechas. Na América Latina geralmente um beijo ou aperto de mão.<br><br>
           <strong>Festas:</strong> As festas começam tarde e terminam de madrugada.<br><br>
           <strong>Dialetos:</strong> Espanhol da Espanha vs. América Latina: "vosotros" vs. "ustedes"; "vos" no Rio da Prata.
        </div>

        <h2>Expressões culturais típicas</h2>
        <table>
          <tr><th>Expresión</th><th>Significado</th></tr>
          <tr><td>¡Qué guay! (España)</td><td>Que legal!</td></tr>
          <tr><td>¡Chévere! (Colombia/Venezuela)</td><td>Que legal!</td></tr>
          <tr><td>¡Qué chido! (México)</td><td>Que legal!</td></tr>
          <tr><td>¡Buena onda! (Argentina)</td><td>Boa vibe!</td></tr>
          <tr><td>La siesta</td><td>Descanso após o almoço</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Não existe "espanhol correto único" — cada país tem suas expressões, sotaques e vocabulário. Todos são válidos!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Quantos países têm o espanhol como língua oficial?",
          options: ["15", "18", "21", "25"],
          answer: 2
        },
        {
          type: "tf",
          question: "'Vosotros' é usado em toda América Latina como pronome plural informal.",
          answer: false
        },
        {
          type: "fill",
          question: "Na Espanha, ao cumprimentar alguém, geralmente se dão ___ beijos.",
          answer: "dos|2"
        }
      ]
    },
    {
      title: "Módulo 16 – Recapitulação A1",
      content: `
        <h2>¡Enhorabuena! Você chegou ao fim do nível A1!</h2>
        <p>Neste nível você aprendeu as bases do espanhol. Vamos revisar os pontos principais:</p>

        <h2>Gramática revisada</h2>
        <table>
          <tr><th>Tema</th><th>Exemplo</th></tr>
          <tr><td>Verbo SER</td><td>Yo soy brasileño. Ella es profesora.</td></tr>
          <tr><td>Verbo ESTAR</td><td>El banco está cerca. Estoy bien.</td></tr>
          <tr><td>Verbo TENER</td><td>Tengo 25 años. Tenemos dos hijos.</td></tr>
          <tr><td>Verbo GUSTAR</td><td>Me gusta el fútbol. ¿Te gustan las películas?</td></tr>
          <tr><td>Verbos reflexivos</td><td>Me levanto a las siete. Se llama Ana.</td></tr>
          <tr><td>Possessivos</td><td>mi, tu, su, nuestro, sus</td></tr>
        </table>

        <h2>Vocabulário essencial do A1</h2>
        <div class="example-box">
          - Alfabeto e pronúncia<br>
          - Cumprimentos e despedidas<br>
          - Apresentação pessoal<br>
          - Família<br>
          - Números, horas e datas<br>
          - Lugares da cidade<br>
          - Compras e restaurante<br>
          - Direções<br>
          - Países e nacionalidades<br>
          - Expressões de cortesia
        </div>

        <h2>Próximo passo: Nível A2</h2>
        <p>No nível A2 você vai aprender tempos verbais do passado, falar sobre experiências, planos futuros, e muito mais!</p>

        <div class="tip-box">
          Dica: <strong>Conselho:</strong> Revise os módulos em que teve dificuldade antes de avançar. A base sólida no A1 é fundamental para o progresso!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual verbo se usa para falar de localização: 'O banco ___ perto.'?",
          options: ["es", "está", "tiene", "hay"],
          answer: 1
        },
        {
          type: "tf",
          question: "No nível A1 aprendemos a usar o pretérito indefinido (passado).",
          answer: false
        },
        {
          type: "fill",
          question: "Complete com o possessivo: '___ nombre es Carlos.' (meu)",
          answer: "Mi"
        }
      ]
    }
  ],
  A2: [
    {
      title: "Módulo 1 – Verbos Pronominales",
      content: `
        <h2>O que são verbos pronominais?</h2>
        <p>São verbos que se conjugam com um pronome reflexivo (me, te, se, nos, os, se). Já vimos alguns no A1 (levantarse, ducharse). Agora vamos aprofundar.</p>
        <table>
          <tr><th>Pronombre</th><th>Pronome reflexivo</th></tr>
          <tr><td>yo</td><td>me</td></tr>
          <tr><td>tú</td><td>te</td></tr>
          <tr><td>él/ella/usted</td><td>se</td></tr>
          <tr><td>nosotros</td><td>nos</td></tr>
          <tr><td>vosotros</td><td>os</td></tr>
          <tr><td>ellos/ustedes</td><td>se</td></tr>
        </table>

        <h2>Verbos pronominais comuns</h2>
        <table>
          <tr><th>Verbo</th><th>Significado</th></tr>
          <tr><td>acordarse (de)</td><td>lembrar-se (de)</td></tr>
          <tr><td>olvidarse (de)</td><td>esquecer-se (de)</td></tr>
          <tr><td>quejarse (de)</td><td>reclamar (de)</td></tr>
          <tr><td>alegrarse (de)</td><td>alegrar-se (com)</td></tr>
          <tr><td>aburrirse</td><td>entediar-se</td></tr>
          <tr><td>divertirse</td><td>divertir-se</td></tr>
          <tr><td>sentirse</td><td>sentir-se</td></tr>
          <tr><td>ponerse</td><td>ficar (+ adjetivo de estado)</td></tr>
          <tr><td>hacerse</td><td>tornar-se</td></tr>
          <tr><td>quedarse</td><td>ficar (em um lugar)</td></tr>
        </table>

        <div class="example-box">
          Me acuerdo de ti. (Eu me lembro de você.)<br>
          Se aburre en clase. (Ele se entedia na aula.)<br>
          Nos divertimos mucho en la fiesta. (Nos divertimos muito na festa.)<br>
          Se pone nervioso antes del examen. (Ele fica nervoso antes da prova.)
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Alguns verbos mudam de sentido com o pronome reflexivo:<br>
          <em>ir</em> = ir &nbsp;→&nbsp; <em>irse</em> = ir embora<br>
          <em>dormir</em> = dormir &nbsp;→&nbsp; <em>dormirse</em> = adormecer
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Eu me lembro do seu nome' em espanhol?",
          options: ["Me recuerdo tu nombre", "Me acuerdo de tu nombre", "Me olvido de tu nombre", "Se acuerda mi nombre"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Divertirse' e 'aburrirse' são verbos pronominais.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'Ella ___ pone triste cuando llueve.' (pronome)",
          answer: "se"
        }
      ]
    },
    {
      title: "Módulo 2 – Pretérito Indefinido",
      content: `
        <h2>O que é o Pretérito Indefinido?</h2>
        <p>É o tempo verbal usado para falar de ações <strong>concluídas no passado</strong>, em um momento específico.</p>

        <h2>Verbos regulares</h2>
        <table>
          <tr><th>Pronombre</th><th>hablar (-AR)</th><th>comer (-ER)</th><th>vivir (-IR)</th></tr>
          <tr><td>yo</td><td>hablé</td><td>comí</td><td>viví</td></tr>
          <tr><td>tú</td><td>hablaste</td><td>comiste</td><td>viviste</td></tr>
          <tr><td>él/ella</td><td>habló</td><td>comió</td><td>vivió</td></tr>
          <tr><td>nosotros</td><td>hablamos</td><td>comimos</td><td>vivimos</td></tr>
          <tr><td>vosotros</td><td>hablasteis</td><td>comisteis</td><td>vivisteis</td></tr>
          <tr><td>ellos</td><td>hablaron</td><td>comieron</td><td>vivieron</td></tr>
        </table>

        <h2>Verbos irregulares mais comuns</h2>
        <table>
          <tr><th>Verbo</th><th>yo</th><th>él/ella</th><th>ellos</th></tr>
          <tr><td>ser / ir</td><td>fui</td><td>fue</td><td>fueron</td></tr>
          <tr><td>tener</td><td>tuve</td><td>tuvo</td><td>tuvieron</td></tr>
          <tr><td>hacer</td><td>hice</td><td>hizo</td><td>hicieron</td></tr>
          <tr><td>poder</td><td>pude</td><td>pudo</td><td>pudieron</td></tr>
          <tr><td>querer</td><td>quise</td><td>quiso</td><td>quisieron</td></tr>
          <tr><td>venir</td><td>vine</td><td>vino</td><td>vinieron</td></tr>
          <tr><td>decir</td><td>dije</td><td>dijo</td><td>dijeron</td></tr>
          <tr><td>estar</td><td>estuve</td><td>estuvo</td><td>estuvieron</td></tr>
        </table>

        <h2>Marcadores temporais do Indefinido</h2>
        <div class="example-box">
          ayer (ontem) · anteayer (anteontem) · la semana pasada (semana passada)<br>
          el mes pasado (mês passado) · el año pasado (ano passado)<br>
          hace dos días (há dois dias) · en 2010 · el lunes (na segunda)
        </div>

        <div class="example-box">
          Ayer <strong>fui</strong> al cine con Ana.<br>
          El año pasado <strong>viví</strong> en Madrid.<br>
          ¿Qué <strong>hiciste</strong> el fin de semana?
        </div>

        <div class="tip-box">
          Dica: <strong>Atenção:</strong> SER e IR têm a mesma conjugação no indefinido! O contexto indica o significado.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual é a forma correta de 'hablar' na 1ª pessoa do Pretérito Indefinido?",
          options: ["hablé", "hable", "habló", "hablaba"],
          answer: 0
        },
        {
          type: "tf",
          question: "Os verbos SER e IR têm conjugações diferentes no Pretérito Indefinido.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Ayer ella ___ al trabajo en metro.' (ir)",
          answer: "fue"
        }
      ]
    },
    {
      title: "Módulo 3 – Indefinido vs. Imperfecto",
      content: `
        <h2>Pretérito Imperfecto</h2>
        <p>Usado para descrever ações <strong>habituais ou contínuas no passado</strong>, ou descrever cenários e estados.</p>
        <table>
          <tr><th>Pronombre</th><th>hablar</th><th>comer</th><th>vivir</th></tr>
          <tr><td>yo</td><td>hablaba</td><td>comía</td><td>vivía</td></tr>
          <tr><td>tú</td><td>hablabas</td><td>comías</td><td>vivías</td></tr>
          <tr><td>él/ella</td><td>hablaba</td><td>comía</td><td>vivía</td></tr>
          <tr><td>nosotros</td><td>hablábamos</td><td>comíamos</td><td>vivíamos</td></tr>
          <tr><td>ellos</td><td>hablaban</td><td>comían</td><td>vivían</td></tr>
        </table>

        <h2>Quando usar cada um?</h2>
        <table>
          <tr><th>Indefinido</th><th>Imperfecto</th></tr>
          <tr><td>Ação pontual e concluída</td><td>Ação habitual no passado</td></tr>
          <tr><td>Sequência de eventos</td><td>Descrição de pessoas/lugares</td></tr>
          <tr><td>Com: ayer, en 2010, de repente</td><td>Com: siempre, antes, de niño, todos los días</td></tr>
        </table>

        <div class="example-box">
          <strong>Indefinido:</strong> Ayer <em>fui</em> al médico. (ação pontual)<br>
          <strong>Imperfecto:</strong> De niño, <em>iba</em> al médico con mi madre. (hábito passado)<br><br>
          <strong>Juntos:</strong> <em>Leía</em> un libro cuando <em>sonó</em> el teléfono.<br>
          (estava lendo = ação de fundo / tocou = ação pontual que interrompeu)
        </div>

        <div class="tip-box">
          Dica: <strong>Regra prática:</strong> Se você pode substituir por "costumava fazer", use o Imperfecto. Se é uma ação específica com data/hora, use o Indefinido.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "'Cuando era niño, ____ al parque todos los días.' Qual tempo usar?",
          options: ["fui", "iba", "voy", "iré"],
          answer: 1
        },
        {
          type: "tf",
          question: "O Imperfecto é usado para narrar ações pontuais e concluídas no passado.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'De niño yo siempre ___ helado.' (comer, imperfecto)",
          answer: "comía"
        }
      ]
    },
    {
      title: "Módulo 4 – Los Viajes",
      content: `
        <h2>Vocabulário de viagens</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el vuelo</td><td>o voo</td></tr>
          <tr><td>el billete / el boleto</td><td>a passagem / o bilhete</td></tr>
          <tr><td>el pasaporte</td><td>o passaporte</td></tr>
          <tr><td>la maleta</td><td>a mala</td></tr>
          <tr><td>el equipaje</td><td>a bagagem</td></tr>
          <tr><td>el hotel / el hostal</td><td>o hotel / a pousada</td></tr>
          <tr><td>la reserva</td><td>a reserva</td></tr>
          <tr><td>el check-in / check-out</td><td>o check-in / check-out</td></tr>
          <tr><td>la aduana</td><td>a alfândega</td></tr>
          <tr><td>el turista</td><td>o turista</td></tr>
          <tr><td>el guía turístico</td><td>o guia turístico</td></tr>
        </table>

        <h2>No aeroporto e no hotel</h2>
        <div class="example-box">
          — ¿A qué hora sale el vuelo? → Sale a las 14:30.<br>
          — ¿Cuántas maletas puedo facturar?<br>
          — Quisiera hacer una reserva para dos noches.<br>
          — ¿Está incluido el desayuno?<br>
          — ¿Me puede dar una habitación con vista al mar?
        </div>

        <h2>Tipos de alojamiento</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>habitación individual</td><td>quarto individual</td></tr>
          <tr><td>habitación doble</td><td>quarto duplo</td></tr>
          <tr><td>media pensión</td><td>meia pensão</td></tr>
          <tr><td>pensión completa</td><td>pensão completa</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Na Espanha diz-se <em>billete</em>, na América Latina <em>boleto</em>. Para avião, trem e ônibus.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se chama a 'bagagem' em espanhol?",
          options: ["el billete", "el equipaje", "la maleta", "B e C estão corretas"],
          answer: 3
        },
        {
          type: "tf",
          question: "'La aduana' é onde fazemos o check-in no hotel.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Quisiera hacer una ___ para esta noche.' (reserva)",
          answer: "reserva"
        }
      ]
    },
    {
      title: "Módulo 5 – La Salud",
      content: `
        <h2>El cuerpo humano</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>la cabeza</td><td>a cabeça</td></tr>
          <tr><td>el cuello</td><td>o pescoço</td></tr>
          <tr><td>el pecho</td><td>o peito</td></tr>
          <tr><td>la espalda</td><td>as costas</td></tr>
          <tr><td>el estómago</td><td>o estômago</td></tr>
          <tr><td>el brazo</td><td>o braço</td></tr>
          <tr><td>la mano</td><td>a mão</td></tr>
          <tr><td>la pierna</td><td>a perna</td></tr>
          <tr><td>el pie</td><td>o pé</td></tr>
          <tr><td>la rodilla</td><td>o joelho</td></tr>
        </table>

        <h2>Expressar sintomas</h2>
        <table>
          <tr><th>Expresión</th><th>Significado</th></tr>
          <tr><td>Me duele la cabeza</td><td>Minha cabeça está doendo</td></tr>
          <tr><td>Me duelen los pies</td><td>Meus pés estão doendo</td></tr>
          <tr><td>Tengo fiebre</td><td>Estou com febre</td></tr>
          <tr><td>Tengo tos</td><td>Estou com tosse</td></tr>
          <tr><td>Me siento mal</td><td>Estou me sentindo mal</td></tr>
          <tr><td>Estoy resfriado/a</td><td>Estou resfriado(a)</td></tr>
          <tr><td>Me he torcido el tobillo</td><td>Torci o tornozelo</td></tr>
        </table>

        <div class="example-box">
          — ¿Qué le pasa? (O que está acontecendo?)<br>
          — Me duele mucho la garganta y tengo fiebre.<br>
          — ¿Desde cuándo? (Desde quando?)<br>
          — Desde ayer por la noche.<br>
          — Voy a recetarle un antibiótico. (Vou receitar um antibiótico.)
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Use <em>me duele</em> (singular) ou <em>me duelen</em> (plural) — funciona como o verbo GUSTAR: o sujeito é a parte do corpo.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Meus pés estão doendo'?",
          options: ["Me duele los pies", "Me duelen los pies", "Tengo dolor los pies", "Los pies me duele"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Tengo fiebre' significa 'Estou com tosse'.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Me ___ mucho la espalda.' (doler, presente)",
          answer: "duele"
        }
      ]
    },
    {
      title: "Módulo 6 – Compras y Servicios",
      content: `
        <h2>Vocabulário avançado de compras</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el escaparate</td><td>a vitrine</td></tr>
          <tr><td>la talla / el número</td><td>o tamanho / o número</td></tr>
          <tr><td>devolver</td><td>devolver</td></tr>
          <tr><td>cambiar</td><td>trocar</td></tr>
          <tr><td>el reembolso</td><td>o reembolso</td></tr>
          <tr><td>la garantía</td><td>a garantia</td></tr>
          <tr><td>está defectuoso/a</td><td>está com defeito</td></tr>
          <tr><td>la factura</td><td>a nota fiscal</td></tr>
        </table>

        <h2>Reclamar e devolver produtos</h2>
        <div class="example-box">
          — Quisiera devolver este abrigo, por favor.<br>
          — ¿Tiene el ticket de compra?<br>
          — Sí, aquí está. Está defectuoso, la cremallera no funciona.<br>
          — ¿Prefiere cambiarlo o le devolvemos el dinero?<br>
          — Prefiero el reembolso, gracias.
        </div>

        <h2>Serviços cotidianos</h2>
        <table>
          <tr><th>Lugar</th><th>O que se faz</th></tr>
          <tr><td>la peluquería</td><td>cortar o cabelo</td></tr>
          <tr><td>la lavandería</td><td>lavar roupa</td></tr>
          <tr><td>el taller</td><td>consertar o carro</td></tr>
          <tr><td>la gestoría</td><td>trâmites burocráticos</td></tr>
          <tr><td>correos</td><td>enviar cartas/encomendas</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Para fazer reclamações formais, use <em>quisiera</em> em vez de <em>quiero</em>. Soa mais educado e profissional.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'A vitrine' em espanhol?",
          options: ["la ventana", "el escaparate", "la vitrina", "el mostrador"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Devolver' em espanhol significa 'entregar' um produto.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Este producto está ___.' (com defeito)",
          answer: "defectuoso"
        }
      ]
    },
    {
      title: "Módulo 7 – Describir Personas y Lugares",
      content: `
        <h2>Describir personas – Aspecto físico</h2>
        <table>
          <tr><th>Característica</th><th>Opciones</th></tr>
          <tr><td>Altura</td><td>alto/a, bajo/a, de estatura media</td></tr>
          <tr><td>Complexão</td><td>delgado/a, gordo/a, robusto/a</td></tr>
          <tr><td>Cabelo</td><td>rubio, moreno, pelirrojo, canoso, calvo</td></tr>
          <tr><td>Comprimento</td><td>pelo largo, corto, rizado, liso</td></tr>
          <tr><td>Olhos</td><td>ojos azules, verdes, marrones, negros</td></tr>
        </table>

        <h2>Personalidade</h2>
        <table>
          <tr><th>Adjetivo</th><th>Significado</th></tr>
          <tr><td>simpático/a</td><td>simpático(a)</td></tr>
          <tr><td>tímido/a</td><td>tímido(a)</td></tr>
          <tr><td>trabajador/a</td><td>trabalhador(a)</td></tr>
          <tr><td>perezoso/a</td><td>preguiçoso(a)</td></tr>
          <tr><td>inteligente</td><td>inteligente</td></tr>
          <tr><td>gracioso/a</td><td>engraçado(a)</td></tr>
          <tr><td>serio/a</td><td>sério(a)</td></tr>
          <tr><td>generoso/a</td><td>generoso(a)</td></tr>
        </table>

        <h2>Describir lugares</h2>
        <div class="example-box">
          Mi ciudad es grande y moderna, pero también tiene barrios antiguos muy bonitos.<br>
          El apartamento es pequeño pero acogedor. Tiene mucha luz natural.<br>
          El parque está sucio y descuidado. Necesita reformas.
        </div>

        <div class="tip-box">
          Dica: <strong>Lembre-se:</strong> Os adjetivos em espanhol concordam em gênero e número com o substantivo.<br>
          un chico alto → una chica alta → unos chicos altos → unas chicas altas
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se descreve alguém com cabelo encaracolado?",
          options: ["pelo liso", "pelo corto", "pelo rizado", "pelo rubio"],
          answer: 2
        },
        {
          type: "tf",
          question: "'Perezoso' significa trabalhador em espanhol.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Mi hermana es muy ___. Siempre ayuda a todos.' (generosa)",
          answer: "generosa"
        }
      ]
    },
    {
      title: "Módulo 8 – Gustos y Opiniones",
      content: `
        <h2>Expressar opiniões</h2>
        <table>
          <tr><th>Expresión</th><th>Uso</th></tr>
          <tr><td>Creo que / Pienso que</td><td>Acho que / Penso que</td></tr>
          <tr><td>En mi opinión...</td><td>Na minha opinião...</td></tr>
          <tr><td>A mi modo de ver...</td><td>Do meu ponto de vista...</td></tr>
          <tr><td>Me parece que...</td><td>Me parece que...</td></tr>
          <tr><td>Estoy seguro/a de que...</td><td>Tenho certeza de que...</td></tr>
        </table>

        <h2>Concordar e discordar</h2>
        <table>
          <tr><th>Concordar</th><th>Discordar</th></tr>
          <tr><td>Tienes razón.</td><td>No estoy de acuerdo.</td></tr>
          <tr><td>Estoy de acuerdo.</td><td>Al contrario...</td></tr>
          <tr><td>Exactamente.</td><td>No lo veo así.</td></tr>
          <tr><td>Yo también pienso eso.</td><td>Puede ser, pero...</td></tr>
          <tr><td>Es verdad.</td><td>No es cierto que...</td></tr>
        </table>

        <h2>Valorar algo</h2>
        <table>
          <tr><th>Positivo</th><th>Negativo</th></tr>
          <tr><td>Es genial / fenomenal</td><td>Es un desastre</td></tr>
          <tr><td>Me parece estupendo</td><td>Me parece fatal</td></tr>
          <tr><td>Me encanta la idea</td><td>No me convence</td></tr>
          <tr><td>Es una pasada</td><td>Es un rollo (España)</td></tr>
        </table>

        <div class="example-box">
          — ¿Qué piensas de la nueva película?<br>
          — En mi opinión, es aburrida. No me convenció.<br>
          — Yo no estoy de acuerdo. A mí me pareció genial.<br>
          — Puede ser, pero creo que el final fue muy malo.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Creo que</em> + indicativo (afirmativo). <em>No creo que</em> + subjuntivo (negativo).<br>
          Creo que <u>tiene</u> razón. / No creo que <u>tenga</u> razón.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Estou de acordo' em espanhol?",
          options: ["Tengo razón", "Estoy de acuerdo", "No lo veo así", "Puede ser"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Me parece fatal' é uma expressão positiva em espanhol.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '___ mi opinión, el libro es muy interesante.'",
          answer: "En"
        }
      ]
    },
    {
      title: "Módulo 9 – Planes y Futuro",
      content: `
        <h2>Formas de expressar o futuro</h2>
        <p>Em espanhol há várias formas de falar sobre o futuro:</p>

        <h2>1. Futuro próximo: IR A + infinitivo</h2>
        <table>
          <tr><th>Pronombre</th><th>Forma</th><th>Exemplo</th></tr>
          <tr><td>yo</td><td>voy a</td><td>Voy a estudiar esta tarde.</td></tr>
          <tr><td>tú</td><td>vas a</td><td>¿Vas a venir a la fiesta?</td></tr>
          <tr><td>él/ella</td><td>va a</td><td>Va a llover mañana.</td></tr>
          <tr><td>nosotros</td><td>vamos a</td><td>Vamos a cenar fuera.</td></tr>
          <tr><td>ellos</td><td>van a</td><td>Van a casarse en junio.</td></tr>
        </table>

        <h2>2. Futuro simples (Futuro Imperfecto)</h2>
        <table>
          <tr><th>Pronombre</th><th>hablar</th><th>comer</th><th>vivir</th></tr>
          <tr><td>yo</td><td>hablaré</td><td>comeré</td><td>viviré</td></tr>
          <tr><td>tú</td><td>hablarás</td><td>comerás</td><td>vivirás</td></tr>
          <tr><td>él/ella</td><td>hablará</td><td>comerá</td><td>vivirá</td></tr>
          <tr><td>nosotros</td><td>hablaremos</td><td>comeremos</td><td>viviremos</td></tr>
          <tr><td>ellos</td><td>hablarán</td><td>comerán</td><td>vivirán</td></tr>
        </table>

        <h2>Irregulares no futuro</h2>
        <div class="example-box">
          tener → tendr-é/ás/á · poder → podr-é · querer → querr-é<br>
          venir → vendr-é · hacer → har-é · decir → dir-é · salir → saldr-é
        </div>

        <h2>Marcadores temporais</h2>
        <div class="example-box">
          mañana · pasado mañana · la semana que viene<br>
          el mes/año que viene · en el futuro · dentro de dos días
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Ir a + infinitivo</em> = plano concreto e próximo. <em>Futuro simples</em> = previsão, promessa ou futuro mais distante.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Vou viajar amanhã' em espanhol?",
          options: ["Viajo mañana", "Voy a viajar mañana", "Viajaré mañana", "B e C estão corretas"],
          answer: 3
        },
        {
          type: "tf",
          question: "O futuro simples de 'tener' é 'teneré'.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'El año que viene ___ a España.' (nós vamos ir)",
          answer: "vamos a ir|iremos"
        }
      ]
    },
    {
      title: "Módulo 10 – El Trabajo",
      content: `
        <h2>Profissões</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el/la médico/a</td><td>o/a médico(a)</td></tr>
          <tr><td>el/la abogado/a</td><td>o/a advogado(a)</td></tr>
          <tr><td>el/la ingeniero/a</td><td>o/a engenheiro(a)</td></tr>
          <tr><td>el/la maestro/a</td><td>o/a professor(a) primário(a)</td></tr>
          <tr><td>el/la enfermero/a</td><td>o/a enfermeiro(a)</td></tr>
          <tr><td>el/la periodista</td><td>o/a jornalista</td></tr>
          <tr><td>el/la cocinero/a</td><td>o/a cozinheiro(a)</td></tr>
          <tr><td>el/la arquitecto/a</td><td>o/a arquiteto(a)</td></tr>
        </table>

        <h2>Vocabulário do trabalho</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el sueldo / el salario</td><td>o salário</td></tr>
          <tr><td>la jornada laboral</td><td>a jornada de trabalho</td></tr>
          <tr><td>el contrato</td><td>o contrato</td></tr>
          <tr><td>el jefe / la jefa</td><td>o/a chefe</td></tr>
          <tr><td>el compañero de trabajo</td><td>o colega de trabalho</td></tr>
          <tr><td>estar en paro / desempleo</td><td>estar desempregado(a)</td></tr>
          <tr><td>solicitar un empleo</td><td>candidatar-se a um emprego</td></tr>
          <tr><td>la entrevista de trabajo</td><td>a entrevista de emprego</td></tr>
        </table>

        <div class="example-box">
          — ¿A qué te dedicas? → Soy programador. Trabajo en una empresa de tecnología.<br>
          — ¿Cuántas horas trabajas al día? → Trabajo ocho horas, de lunes a viernes.<br>
          — Estoy buscando trabajo. Mandé mi CV a varias empresas.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em espanhol, ao dizer a profissão, NÃO se usa artigo: <em>Soy médico</em> (não "Soy un médico"), a menos que haja adjetivo: <em>Soy un buen médico</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz corretamente 'Sou advogada' em espanhol?",
          options: ["Soy una abogada", "Soy abogada", "Estoy abogada", "Tengo abogada"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Estar en paro' significa estar muito ocupado no trabalho.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Mañana tengo una ___ de trabajo.' (entrevista)",
          answer: "entrevista"
        }
      ]
    }
    ,
    {
      title: "Módulo 11 – Conectores del Discurso",
      content: `
        <h2>O que são conectores?</h2>
        <p>São palavras e expressões que unem ideias e dão coesão ao texto falado ou escrito.</p>

        <h2>Conectores de adição</h2>
        <table>
          <tr><th>Conector</th><th>Uso</th></tr>
          <tr><td>además</td><td>além disso</td></tr>
          <tr><td>también</td><td>também</td></tr>
          <tr><td>incluso</td><td>inclusive / até</td></tr>
          <tr><td>encima (informal)</td><td>por cima de tudo</td></tr>
        </table>

        <h2>Conectores de contraste</h2>
        <table>
          <tr><th>Conector</th><th>Uso</th></tr>
          <tr><td>pero</td><td>mas / porém</td></tr>
          <tr><td>sin embargo</td><td>no entanto / porém</td></tr>
          <tr><td>aunque</td><td>embora / mesmo que</td></tr>
          <tr><td>a pesar de (que)</td><td>apesar de (que)</td></tr>
          <tr><td>no obstante</td><td>não obstante / contudo</td></tr>
        </table>

        <h2>Conectores de causa e consequência</h2>
        <table>
          <tr><th>Conector</th><th>Uso</th></tr>
          <tr><td>porque</td><td>porque</td></tr>
          <tr><td>como</td><td>como / uma vez que</td></tr>
          <tr><td>por eso / por eso</td><td>por isso</td></tr>
          <tr><td>así que</td><td>então / portanto</td></tr>
          <tr><td>por lo tanto</td><td>portanto</td></tr>
        </table>

        <h2>Conectores de ordem e tempo</h2>
        <div class="example-box">
          primero… luego… después… finalmente… por último…<br>
          antes de · después de · cuando · mientras · hasta que
        </div>

        <div class="example-box">
          Me gusta el fútbol, <strong>sin embargo</strong> no practico ningún deporte.<br>
          Llegué tarde <strong>porque</strong> había mucho tráfico, <strong>así que</strong> perdí la reunión.<br>
          <strong>Aunque</strong> llueva, voy a salir a correr.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Pero</em> é informal e muito usado na fala. <em>Sin embargo</em> e <em>no obstante</em> são mais formais, ideais para textos escritos.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual conector expressa contraste de forma mais formal?",
          options: ["pero", "y", "sin embargo", "porque"],
          answer: 2
        },
        {
          type: "tf",
          question: "'Por lo tanto' é um conector de causa.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Estaba cansado, ___ así fui al gimnasio.' (mesmo assim)",
          answer: "pero|sin embargo|aun así"
        }
      ]
    },
    {
      title: "Módulo 12 – Medios de Comunicación",
      content: `
        <h2>Los medios de comunicación</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el periódico / el diario</td><td>o jornal</td></tr>
          <tr><td>la revista</td><td>a revista</td></tr>
          <tr><td>la televisión / la tele</td><td>a televisão</td></tr>
          <tr><td>la radio</td><td>o rádio</td></tr>
          <tr><td>internet / la red</td><td>a internet</td></tr>
          <tr><td>las redes sociales</td><td>as redes sociais</td></tr>
          <tr><td>el podcast</td><td>o podcast</td></tr>
          <tr><td>las noticias</td><td>as notícias</td></tr>
          <tr><td>el titular</td><td>a manchete</td></tr>
          <tr><td>el reportaje</td><td>a reportagem</td></tr>
        </table>

        <h2>Verbos relacionados</h2>
        <table>
          <tr><th>Verbo</th><th>Significado</th></tr>
          <tr><td>publicar</td><td>publicar</td></tr>
          <tr><td>compartir</td><td>compartilhar</td></tr>
          <tr><td>comentar</td><td>comentar</td></tr>
          <tr><td>seguir (a alguien)</td><td>seguir (alguém)</td></tr>
          <tr><td>buscar información</td><td>pesquisar informações</td></tr>
          <tr><td>ver las noticias</td><td>assistir ao noticiário</td></tr>
        </table>

        <div class="example-box">
          Cada mañana leo las noticias en el móvil.<br>
          Prefiero informarme por internet que por televisión.<br>
          Sigo a varios periodistas en las redes sociales.<br>
          El reportaje fue publicado ayer en el periódico nacional.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em espanhol, <em>el móvil</em> (Espanha) = <em>el celular</em> (América Latina) = o celular.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'redes sociais' em espanhol?",
          options: ["los medios sociales", "las redes sociales", "los periódicos sociales", "las noticias sociales"],
          answer: 1
        },
        {
          type: "tf",
          question: "'El titular' em espanhol significa 'o título de um livro'.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Todos los días veo las ___ en la televisión.' (notícias)",
          answer: "noticias"
        }
      ]
    },
    {
      title: "Módulo 13 – Cultura Hispana A2",
      content: `
        <h2>Festividades del mundo hispano</h2>
        <table>
          <tr><th>Festividad</th><th>Descripción</th></tr>
          <tr><td>La Navidad</td><td>25 de dezembro – família e presentes</td></tr>
          <tr><td>La Nochevieja</td><td>31 de dezembro – 12 uvas à meia-noite</td></tr>
          <tr><td>Los Reyes Magos</td><td>6 de janeiro – crianças ganham presentes na Espanha</td></tr>
          <tr><td>El Carnaval</td><td>Fevereiro/março – festas, fantasias</td></tr>
          <tr><td>La Semana Santa</td><td>Páscoa – procissões religiosas</td></tr>
          <tr><td>El Día de los Muertos</td><td>2 de novembro – México, honrar os falecidos</td></tr>
          <tr><td>Las Fallas</td><td>Março, Valência – monumentos de papelão queimados</td></tr>
          <tr><td>La Tomatina</td><td>Agosto, Buñol – batalha de tomates</td></tr>
        </table>

        <h2>Gastronomia hispana</h2>
        <table>
          <tr><th>Prato/Bebida</th><th>País</th></tr>
          <tr><td>La paella</td><td>España (Valencia)</td></tr>
          <tr><td>El gazpacho</td><td>España (Andalucía)</td></tr>
          <tr><td>Los tacos</td><td>México</td></tr>
          <tr><td>El asado</td><td>Argentina/Uruguay</td></tr>
          <tr><td>El ceviche</td><td>Perú</td></tr>
          <tr><td>La arepa</td><td>Colombia/Venezuela</td></tr>
          <tr><td>El mate</td><td>Argentina/Uruguay/Paraguay</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Curiosidade:</strong> Na Espanha, a tradição de comer 12 uvas no Ano Novo simboliza sorte para cada mês do ano seguinte. É quase impossível comer tão rápido!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual prato típico é originário do Peru?",
          options: ["La paella", "El asado", "El ceviche", "La arepa"],
          answer: 2
        },
        {
          type: "tf",
          question: "Na Espanha, as crianças recebem presentes no Natal (25/12) e também no Dia dos Reis Magos (6/01).",
          answer: true
        },
        {
          type: "fill",
          question: "A batalha de tomates que ocorre em agosto na Espanha chama-se La ___.",
          answer: "Tomatina"
        }
      ]
    },
    {
      title: "Módulo 14 – Recapitulação A2",
      content: `
        <h2>¡Felicidades! Você completou o nível A2!</h2>
        <p>Neste nível você expandiu muito seu espanhol. Veja o que aprendeu:</p>

        <h2>Gramática do A2</h2>
        <table>
          <tr><th>Tema</th><th>Exemplo</th></tr>
          <tr><td>Verbos pronominais</td><td>Me acuerdo, se divierte, nos quedamos</td></tr>
          <tr><td>Pretérito Indefinido</td><td>Fui, comí, tuvieron, hicieron</td></tr>
          <tr><td>Pretérito Imperfecto</td><td>Comía, vivía, era, tenía</td></tr>
          <tr><td>Indef. vs. Imperfecto</td><td>Leía cuando sonó el teléfono</td></tr>
          <tr><td>Futuro (ir a + inf.)</td><td>Voy a estudiar esta noche</td></tr>
          <tr><td>Futuro simple</td><td>Hablaré, vendrá, haremos</td></tr>
          <tr><td>Conectores</td><td>sin embargo, por eso, aunque</td></tr>
        </table>

        <h2>Vocabulário do A2</h2>
        <div class="example-box">
          - Viagens e alojamento<br>
          - Saúde e corpo humano<br>
          - Compras e reclamações<br>
          - Descrição de pessoas e lugares<br>
          - Opiniões e gostos<br>
          - Trabalho e profissões<br>
          - Meios de comunicação<br>
          - Cultura e festividades hispanas
        </div>

        <h2>Próximo passo: Nível B1</h2>
        <p>No B1 você vai aprender o Pretérito Perfecto, o Subjuntivo, o Imperativo e muito mais vocabulário para se comunicar com maior fluidez!</p>

        <div class="tip-box">
          Dica: <strong>Conselho:</strong> Tente ler textos curtos em espanhol, assistir séries com legendas em espanhol e ouvir músicas hispanas. A imersão acelera o aprendizado!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual tempo verbal descreve hábitos no passado?",
          options: ["Futuro simple", "Pretérito Indefinido", "Pretérito Imperfecto", "Presente"],
          answer: 2
        },
        {
          type: "tf",
          question: "No A2 aprendemos o modo Subjuntivo completo.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete com o conector: 'Me gusta el café, ___ tomo poco.' (mas / porém)",
          answer: "pero|sin embargo"
        }
      ]
    }
  ],
  B1: [
    {
      title: "Módulo 1 – Pretérito Perfecto",
      content: `
        <h2>O Pretérito Perfecto</h2>
        <p>Usado para falar de ações <strong>recentes ou com ligação ao presente</strong>. Formado com <em>haber</em> + particípio.</p>

        <h2>Verbo HABER (auxiliar)</h2>
        <table>
          <tr><th>Pronombre</th><th>Haber</th></tr>
          <tr><td>yo</td><td>he</td></tr>
          <tr><td>tú</td><td>has</td></tr>
          <tr><td>él/ella</td><td>ha</td></tr>
          <tr><td>nosotros</td><td>hemos</td></tr>
          <tr><td>vosotros</td><td>habéis</td></tr>
          <tr><td>ellos</td><td>han</td></tr>
        </table>

        <h2>Particípios regulares</h2>
        <table>
          <tr><th>Infinitivo</th><th>Particípio</th></tr>
          <tr><td>hablar (-AR)</td><td>hablado</td></tr>
          <tr><td>comer (-ER)</td><td>comido</td></tr>
          <tr><td>vivir (-IR)</td><td>vivido</td></tr>
        </table>

        <h2>Particípios irregulares</h2>
        <div class="example-box">
          hacer → hecho · decir → dicho · ver → visto<br>
          escribir → escrito · abrir → abierto · volver → vuelto<br>
          poner → puesto · romper → roto · morir → muerto
        </div>

        <h2>Marcadores temporais</h2>
        <div class="example-box">
          hoy · esta mañana / tarde / noche · esta semana · este mes · este año<br>
          ya (já) · todavía no (ainda não) · alguna vez (alguma vez) · nunca (nunca)
        </div>

        <div class="example-box">
          <strong>He comido</strong> paella hoy. (Comi paella hoje.)<br>
          ¿Has <strong>visto</strong> esta película alguna vez? (Você já viu esse filme?)<br>
          Todavía no he <strong>terminado</strong> el informe. (Ainda não terminei o relatório.)
        </div>

        <div class="tip-box">
          Dica: <strong>Perfecto vs. Indefinido:</strong> Na Espanha — <em>hoy he comido</em> (hoje) vs. <em>ayer comí</em> (ontem). Na América Latina, o Indefinido costuma ser usado em ambos os casos.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual é o particípio de 'hacer'?",
          options: ["hacido", "hecho", "hacado", "haciendo"],
          answer: 1
        },
        {
          type: "tf",
          question: "O Pretérito Perfecto se forma com o verbo SER + particípio.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Hoy no ___ comido nada.' (yo, haber)",
          answer: "he"
        }
      ]
    },
    {
      title: "Módulo 2 – El Subjuntivo Presente",
      content: `
        <h2>O que é o Subjuntivo?</h2>
        <p>O subjuntivo expressa <strong>desejo, dúvida, emoção, possibilidade ou hipótese</strong>. É muito usado em orações subordinadas.</p>

        <h2>Formação: verbos regulares</h2>
        <table>
          <tr><th>Pronombre</th><th>hablar</th><th>comer</th><th>vivir</th></tr>
          <tr><td>yo</td><td>hable</td><td>coma</td><td>viva</td></tr>
          <tr><td>tú</td><td>hables</td><td>comas</td><td>vivas</td></tr>
          <tr><td>él/ella</td><td>hable</td><td>coma</td><td>viva</td></tr>
          <tr><td>nosotros</td><td>hablemos</td><td>comamos</td><td>vivamos</td></tr>
          <tr><td>ellos</td><td>hablen</td><td>coman</td><td>vivan</td></tr>
        </table>

        <h2>Quando usar o subjuntivo</h2>
        <table>
          <tr><th>Contexto</th><th>Exemplo</th></tr>
          <tr><td>Desejo (querer, esperar, desear)</td><td>Quiero que <em>vengas</em>.</td></tr>
          <tr><td>Emoção (alegrarse, sentir)</td><td>Me alegra que <em>estés</em> bien.</td></tr>
          <tr><td>Dúvida (dudar, no creer)</td><td>No creo que <em>sea</em> verdad.</td></tr>
          <tr><td>Necessidade (necesitar, es necesario)</td><td>Es necesario que <em>estudies</em>.</td></tr>
          <tr><td>Valoração impessoal</td><td>Es importante que <em>comas</em> bien.</td></tr>
        </table>

        <div class="example-box">
          Espero que todo <strong>salga</strong> bien.<br>
          Es importante que <strong>llegues</strong> puntual.<br>
          No creo que <strong>haga</strong> frío mañana.<br>
          Quiero que me <strong>digas</strong> la verdad.
        </div>

        <div class="tip-box">
          Dica: <strong>Regra de ouro:</strong> Dois sujeitos diferentes → subjuntivo. Mesmo sujeito → infinitivo.<br>
          Quiero <u>estudiar</u>. (eu quero eu estudar) vs. Quiero que tú <u>estudies</u>. (eu quero que você estude)
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Complete: 'Es necesario que ___ más agua.' (tú, beber)",
          options: ["bebes", "bebas", "beberás", "bebías"],
          answer: 1
        },
        {
          type: "tf",
          question: "O subjuntivo é usado quando há dois sujeitos diferentes na frase.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'Espero que todo ___ bien.' (salir, subjuntivo)",
          answer: "salga"
        }
      ]
    },
    {
      title: "Módulo 3 – El Imperativo",
      content: `
        <h2>O Imperativo — dar ordens e conselhos</h2>
        <p>Usado para dar instruções, conselhos, ordens ou pedidos.</p>

        <h2>Imperativo afirmativo – formas regulares</h2>
        <table>
          <tr><th>Pronombre</th><th>hablar</th><th>comer</th><th>escribir</th></tr>
          <tr><td>tú</td><td>habla</td><td>come</td><td>escribe</td></tr>
          <tr><td>usted</td><td>hable</td><td>coma</td><td>escriba</td></tr>
          <tr><td>vosotros</td><td>hablad</td><td>comed</td><td>escribid</td></tr>
          <tr><td>ustedes</td><td>hablen</td><td>coman</td><td>escriban</td></tr>
        </table>

        <h2>Imperativos irregulares (tú)</h2>
        <div class="example-box">
          ser → sé · ir → ve · tener → ten · hacer → haz<br>
          decir → di · poner → pon · venir → ven · salir → sal
        </div>

        <h2>Imperativo negativo</h2>
        <p>No imperativo negativo, usa-se <strong>no + subjuntivo</strong>:</p>
        <table>
          <tr><th>Pronombre</th><th>hablar</th><th>comer</th></tr>
          <tr><td>tú</td><td>no hables</td><td>no comas</td></tr>
          <tr><td>usted</td><td>no hable</td><td>no coma</td></tr>
          <tr><td>ustedes</td><td>no hablen</td><td>no coman</td></tr>
        </table>

        <div class="example-box">
          ¡<strong>Ven</strong> aquí! (Vem aqui!)<br>
          <strong>Habla</strong> más despacio, por favor. (Fale mais devagar, por favor.)<br>
          No <strong>corras</strong> en los pasillos. (Não corra nos corredores.)<br>
          <strong>Ten</strong> paciencia. (Tenha paciência.)
        </div>

        <div class="tip-box">
          Dica: <strong>Com pronomes:</strong> No afirmativo, o pronome vai junto ao verbo: <em>¡Dímelo!</em> (Diga-me!). No negativo, vai separado: <em>No me lo digas</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual é o imperativo de 'hacer' para 'tú'?",
          options: ["hace", "haz", "haga", "hacé"],
          answer: 1
        },
        {
          type: "tf",
          question: "O imperativo negativo usa a forma do subjuntivo.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'No ___ tanto ruido.' (hacer, tú, negativo)",
          answer: "hagas"
        }
      ]
    },
    {
      title: "Módulo 4 – Hablar de Experiencias",
      content: `
        <h2>Contar experiências de vida</h2>
        <p>Para falar de experiências usamos o <strong>Pretérito Perfecto</strong> com marcadores como <em>alguna vez, nunca, ya, todavía no</em>.</p>

        <h2>Frases para expressar experiências</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>¿Has estado alguna vez en...?</td><td>Você já esteve em...?</td></tr>
          <tr><td>Sí, he estado en... / No, nunca he estado.</td><td>Sim, estive em... / Não, nunca estive.</td></tr>
          <tr><td>Ha sido una experiencia increíble.</td><td>Foi uma experiência incrível.</td></tr>
          <tr><td>Fue la primera vez que...</td><td>Foi a primeira vez que...</td></tr>
          <tr><td>Nunca olvidaré cuando...</td><td>Nunca vou esquecer quando...</td></tr>
        </table>

        <h2>Contar uma história no passado</h2>
        <div class="example-box">
          El año pasado <strong>viajé</strong> a Colombia por primera vez. <strong>Era</strong> verano y hacía mucho calor.<br>
          Primero <strong>visité</strong> Cartagena, que <strong>era</strong> una ciudad preciosa.<br>
          Un día, mientras <strong>caminaba</strong> por la playa, <strong>conocí</strong> a una familia local muy simpática.<br>
          <strong>Fue</strong> una experiencia que nunca olvidaré.
        </div>

        <h2>Valorar experiências</h2>
        <table>
          <tr><th>Expresión</th><th>Significado</th></tr>
          <tr><td>Fue increíble / alucinante</td><td>Foi incrível / alucinante</td></tr>
          <tr><td>Me encantó</td><td>Adorei</td></tr>
          <tr><td>No me gustó nada</td><td>Não gostei nada</td></tr>
          <tr><td>Fue una decepción</td><td>Foi uma decepção</td></tr>
          <tr><td>Mereció la pena</td><td>Valeu a pena</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica narrativa:</strong> Use o Imperfecto para descrever o contexto (era, hacía, había) e o Indefinido para os eventos principais (llegué, vi, comí).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se pergunta 'Você já esteve em Paris?'",
          options: ["¿Estuviste alguna vez en París?", "¿Has estado alguna vez en París?", "¿Fuiste a París?", "A e B estão corretas"],
          answer: 3
        },
        {
          type: "tf",
          question: "'Mereció la pena' significa 'não valeu a pena'.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '___ la primera vez que probé el sushi.' (Foi)",
          answer: "Fue"
        }
      ]
    },
    {
      title: "Módulo 5 – El Medio Ambiente",
      content: `
        <h2>Vocabulário do meio ambiente</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el medio ambiente</td><td>o meio ambiente</td></tr>
          <tr><td>el cambio climático</td><td>a mudança climática</td></tr>
          <tr><td>la contaminación</td><td>a contaminação / poluição</td></tr>
          <tr><td>el calentamiento global</td><td>o aquecimento global</td></tr>
          <tr><td>los recursos naturales</td><td>os recursos naturais</td></tr>
          <tr><td>reciclar</td><td>reciclar</td></tr>
          <tr><td>las energías renovables</td><td>as energias renováveis</td></tr>
          <tr><td>la deforestación</td><td>o desmatamento</td></tr>
          <tr><td>la biodiversidad</td><td>a biodiversidade</td></tr>
          <tr><td>reducir / reutilizar / reciclar</td><td>reduzir / reutilizar / reciclar</td></tr>
        </table>

        <h2>Dar conselhos sobre meio ambiente</h2>
        <div class="example-box">
          <strong>Deberías</strong> usar menos el coche y ir más en bici.<br>
          Es importante que <strong>reciclemos</strong> la basura.<br>
          Si todo el mundo <strong>ahorrara</strong> agua, el planeta estaría mejor.<br>
          <strong>Hay que</strong> reducir el consumo de plásticos.
        </div>

        <h2>Problemas e soluções</h2>
        <table>
          <tr><th>Problema</th><th>Solución</th></tr>
          <tr><td>Contaminación del aire</td><td>Usar transporte público</td></tr>
          <tr><td>Deforestación</td><td>Plantar árboles</td></tr>
          <tr><td>Residuos plásticos</td><td>Reciclar, evitar plástico de un solo uso</td></tr>
          <tr><td>Calentamiento global</td><td>Energías renovables</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Expressões úteis:</strong> <em>hay que</em> + infinitivo = é necessário. <em>se debe</em> + infinitivo = deve-se. <em>deberías</em> + infinitivo = você deveria.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'aquecimento global' em espanhol?",
          options: ["el cambio climático", "la contaminación", "el calentamiento global", "la deforestación"],
          answer: 2
        },
        {
          type: "tf",
          question: "'Hay que reciclar' significa 'é necessário reciclar'.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: '___ que reducir el uso de plásticos.' (É necessário)",
          answer: "Hay"
        }
      ]
    }
    ,
    {
      title: "Módulo 6 – Relaciones Personales",
      content: `
        <h2>Tipos de relações</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>la amistad</td><td>a amizade</td></tr>
          <tr><td>la pareja</td><td>o casal / o/a namorado(a)</td></tr>
          <tr><td>el noviazgo</td><td>o namoro</td></tr>
          <tr><td>el matrimonio</td><td>o casamento</td></tr>
          <tr><td>la ruptura / la separación</td><td>o término / a separação</td></tr>
          <tr><td>llevarse bien/mal</td><td>se dar bem/mal</td></tr>
          <tr><td>discutir / pelearse</td><td>discutir / brigar</td></tr>
          <tr><td>reconciliarse</td><td>se reconciliar</td></tr>
          <tr><td>apoyarse mutuamente</td><td>apoiar-se mutuamente</td></tr>
        </table>

        <h2>Expressar sentimentos</h2>
        <table>
          <tr><th>Expresión</th><th>Significado</th></tr>
          <tr><td>estar enamorado/a de</td><td>estar apaixonado(a) por</td></tr>
          <tr><td>echar de menos / extrañar</td><td>sentir saudade</td></tr>
          <tr><td>confiar en alguien</td><td>confiar em alguém</td></tr>
          <tr><td>decepcionar</td><td>decepcionar</td></tr>
          <tr><td>hacer las paces</td><td>fazer as pazes</td></tr>
        </table>

        <div class="example-box">
          Me llevo muy bien con mis compañeros de trabajo.<br>
          Discutimos, pero al final hicimos las paces.<br>
          Echo mucho de menos a mis amigos cuando viajo.<br>
          Lo más importante en una relación es la confianza.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Echar de menos</em> (Espanha) = <em>extrañar</em> (América Latina) = sentir saudade de alguém ou algo.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'sentir saudade' em espanhol (Espanha)?",
          options: ["extrañar", "echar de menos", "decepcionar", "confiar"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Hacer las paces' significa começar uma briga.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Me llevo muy ___ con mi jefe.' (bem)",
          answer: "bien"
        }
      ]
    },
    {
      title: "Módulo 7 – La Vivienda",
      content: `
        <h2>Tipos de vivienda</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el piso / el apartamento</td><td>o apartamento</td></tr>
          <tr><td>la casa / el chalet</td><td>a casa / o chalé</td></tr>
          <tr><td>el estudio</td><td>o estúdio (quitinete)</td></tr>
          <tr><td>el ático</td><td>a cobertura</td></tr>
          <tr><td>alquilar / arrendar</td><td>alugar</td></tr>
          <tr><td>comprar</td><td>comprar</td></tr>
          <tr><td>el alquiler</td><td>o aluguel</td></tr>
          <tr><td>el propietario / el inquilino</td><td>o proprietário / o inquilino</td></tr>
        </table>

        <h2>Partes da casa</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el salón / la sala</td><td>a sala de estar</td></tr>
          <tr><td>el dormitorio / la habitación</td><td>o quarto</td></tr>
          <tr><td>la cocina</td><td>a cozinha</td></tr>
          <tr><td>el baño / el aseo</td><td>o banheiro</td></tr>
          <tr><td>el pasillo</td><td>o corredor</td></tr>
          <tr><td>la terraza / el balcón</td><td>a varanda</td></tr>
          <tr><td>el trastero</td><td>o depósito / a dispensa</td></tr>
          <tr><td>el garaje</td><td>a garagem</td></tr>
        </table>

        <div class="example-box">
          Busco un piso de dos habitaciones, cerca del centro, con terraza.<br>
          El alquiler incluye los gastos de comunidad pero no la luz ni el agua.<br>
          El piso está en un tercer piso sin ascensor y es muy luminoso.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em anúncios imobiliários espanhóis: <em>hab.</em> = habitaciones, <em>baño completo</em> = banheiro com banheira, <em>aseo</em> = lavabo/meio banheiro.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se chama o cômodo para dormir em espanhol?",
          options: ["el salón", "la cocina", "el dormitorio", "el pasillo"],
          answer: 2
        },
        {
          type: "tf",
          question: "'El inquilino' é o dono do imóvel.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Quiero ___ un piso en el centro.' (alugar)",
          answer: "alquilar"
        }
      ]
    },
    {
      title: "Módulo 8 – La Educación",
      content: `
        <h2>Sistema educativo</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>la guardería</td><td>a creche</td></tr>
          <tr><td>el colegio / la escuela primaria</td><td>a escola primária</td></tr>
          <tr><td>el instituto / la secundaria</td><td>o ensino médio</td></tr>
          <tr><td>la universidad / la facultad</td><td>a universidade</td></tr>
          <tr><td>el máster</td><td>o mestrado</td></tr>
          <tr><td>el doctorado</td><td>o doutorado</td></tr>
          <tr><td>la beca</td><td>a bolsa de estudos</td></tr>
          <tr><td>el título / la carrera</td><td>o diploma / o curso</td></tr>
        </table>

        <h2>Vocabulário da sala de aula</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>aprobar / suspender</td><td>passar / reprovar</td></tr>
          <tr><td>el examen / la prueba</td><td>a prova / o exame</td></tr>
          <tr><td>la nota / la calificación</td><td>a nota</td></tr>
          <tr><td>el trabajo de fin de grado</td><td>o trabalho de conclusão</td></tr>
          <tr><td>hacer un curso</td><td>fazer um curso</td></tr>
          <tr><td>matricularse</td><td>se matricular</td></tr>
        </table>

        <div class="example-box">
          Me matriculé en la universidad hace dos años y estudio Derecho.<br>
          El año pasado suspendí dos asignaturas y tuve que repetirlas.<br>
          Conseguí una beca Erasmus para estudiar en Salamanca durante un semestre.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> O programa <em>Erasmus</em> permite estudar em outro país europeu. É muito popular entre estudantes espanhóis e é uma ótima forma de aprender idiomas.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'reprovar' em espanhol?",
          options: ["aprobar", "suspender", "estudiar", "matricularse"],
          answer: 1
        },
        {
          type: "tf",
          question: "'La beca' é um empréstimo que o aluno deve devolver ao banco.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Voy a ___ en un curso de español.' (matricular-se)",
          answer: "matricularme"
        }
      ]
    },
    {
      title: "Módulo 9 – Tecnología y Sociedad",
      content: `
        <h2>Vocabulário tecnológico</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el ordenador / la computadora</td><td>o computador</td></tr>
          <tr><td>el móvil / el celular</td><td>o celular</td></tr>
          <tr><td>la contraseña</td><td>a senha</td></tr>
          <tr><td>la aplicación / la app</td><td>o aplicativo</td></tr>
          <tr><td>la nube</td><td>a nuvem</td></tr>
          <tr><td>la inteligencia artificial</td><td>a inteligência artificial</td></tr>
          <tr><td>el teletrabajo</td><td>o trabalho remoto / home office</td></tr>
          <tr><td>la ciberseguridad</td><td>a cibersegurança</td></tr>
          <tr><td>descargar / subir</td><td>baixar / fazer upload</td></tr>
          <tr><td>la videollamada</td><td>a videochamada</td></tr>
        </table>

        <h2>Impacto social da tecnologia</h2>
        <div class="example-box">
          <strong>Ventajas:</strong> comunicación inmediata, acceso a información, teletrabajo, compras online.<br>
          <strong>Desventajas:</strong> adicción al móvil, desinformación, pérdida de privacidad, menos contacto humano.
        </div>

        <h2>Dar opinião sobre tecnologia</h2>
        <div class="example-box">
          En mi opinión, las redes sociales tienen más ventajas que desventajas.<br>
          Creo que la IA va a cambiar el mercado laboral completamente.<br>
          A mi modo de ver, dependemos demasiado del móvil.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Ordenador</em> é usado na Espanha. Na América Latina se usa <em>computadora</em> ou <em>computador</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se chama 'trabalho remoto' em espanhol?",
          options: ["el trabajo libre", "el teletrabajo", "el trabajo digital", "el trabajo virtual"],
          answer: 1
        },
        {
          type: "tf",
          question: "'La contraseña' é a tela do computador.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'Necesito ___ la aplicación en mi móvil.' (baixar)",
          answer: "descargar"
        }
      ]
    },
    {
      title: "Módulo 10 – Recapitulação B1",
      content: `
        <h2>¡Enhorabuena! Você completou o nível B1!</h2>
        <p>O B1 é um marco importante — você já é um <strong>falante independente</strong> do espanhol!</p>

        <h2>Gramática do B1</h2>
        <table>
          <tr><th>Tema</th><th>Exemplo</th></tr>
          <tr><td>Pretérito Perfecto</td><td>He comido, ha visto, hemos hecho</td></tr>
          <tr><td>Subjuntivo presente</td><td>Quiero que vengas, es importante que estudies</td></tr>
          <tr><td>Imperativo</td><td>Habla, come, haz, no digas, ven</td></tr>
          <tr><td>Perífrases verbais</td><td>Hay que estudiar, deberías descansar</td></tr>
          <tr><td>Narração no passado</td><td>Indefinido + Imperfecto juntos</td></tr>
        </table>

        <h2>Temas do B1</h2>
        <div class="example-box">
          - Pretérito Perfecto<br>
          - Subjuntivo presente<br>
          - Imperativo afirmativo e negativo<br>
          - Narrar experiências<br>
          - Meio ambiente<br>
          - Relações pessoais<br>
          - Habitação<br>
          - Educação<br>
          - Tecnologia e sociedade
        </div>

        <h2>Próximo passo: Nível B2</h2>
        <p>No B2 você vai dominar o Subjuntivo Imperfecto, orações condicionais, voz passiva e muito mais — chegando ao nível avançado!</p>

        <div class="tip-box">
          Dica: <strong>Conselho:</strong> Neste nível, tente manter conversas completas em espanhol. Busque um parceiro de intercâmbio (tandem) ou pratique com nativos online!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual das seguintes frases usa o Subjuntivo corretamente?",
          options: ["Quiero que vienes mañana.", "Espero que todo salga bien.", "Es importante estudias más.", "Necesito que tú vas al médico."],
          answer: 1
        },
        {
          type: "tf",
          question: "No nível B1 o aluno já é considerado um falante independente.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete o imperativo: '___ más agua todos los días.' (beber, tú)",
          answer: "Bebe"
        }
      ]
    }
  ],
  B2: [
    {
      title: "Módulo 1 – El Subjuntivo Imperfecto",
      content: `
        <h2>O Subjuntivo Imperfecto</h2>
        <p>Usado para expressar hipóteses, desejos irreais, condições e situações no passado que requerem subjuntivo.</p>

        <h2>Formação: -RA (mais comum)</h2>
        <table>
          <tr><th>Pronombre</th><th>hablar</th><th>comer</th><th>vivir</th></tr>
          <tr><td>yo</td><td>hablara</td><td>comiera</td><td>viviera</td></tr>
          <tr><td>tú</td><td>hablaras</td><td>comieras</td><td>vivieras</td></tr>
          <tr><td>él/ella</td><td>hablara</td><td>comiera</td><td>viviera</td></tr>
          <tr><td>nosotros</td><td>habláramos</td><td>comiéramos</td><td>viviéramos</td></tr>
          <tr><td>ellos</td><td>hablaran</td><td>comieran</td><td>vivieran</td></tr>
        </table>

        <h2>Irregulares: base = 3ª pessoa plural do Indefinido</h2>
        <div class="example-box">
          ser/ir → fueron → <strong>fuera, fueras, fuera...</strong><br>
          tener → tuvieron → <strong>tuviera, tuvieras...</strong><br>
          hacer → hicieron → <strong>hiciera, hicieras...</strong><br>
          poder → pudieron → <strong>pudiera, pudieras...</strong>
        </div>

        <h2>Usos principais</h2>
        <table>
          <tr><th>Uso</th><th>Exemplo</th></tr>
          <tr><td>Condicional irreal (presente)</td><td>Si <em>tuviera</em> dinero, viajaría.</td></tr>
          <tr><td>Desejo irreal</td><td>¡Ojalá <em>pudiera</em> volar!</td></tr>
          <tr><td>Pedido educado</td><td>Quisiera un café.</td></tr>
          <tr><td>Após verbos no passado</td><td>Quería que <em>vinieras</em>.</td></tr>
        </table>

        <div class="example-box">
          Si <strong>tuviera</strong> más tiempo, aprendería japonés.<br>
          ¡Ojalá <strong>hiciera</strong> sol mañana!<br>
          Me pidió que <strong>llegara</strong> temprano.<br>
          <strong>Quisiera</strong> hablar con el director, por favor.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> A base do Subjuntivo Imperfecto é sempre a 3ª pessoa plural do Pretérito Indefinido, sem o <em>-ron</em>: <em>fueron → fuera</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Complete: 'Si ___ más dinero, compraría una casa.' (tener, subj. imp.)",
          options: ["tengo", "tenga", "tuviera", "tendría"],
          answer: 2
        },
        {
          type: "tf",
          question: "O Subjuntivo Imperfecto de 'ser' é 'siera'.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '¡Ojalá ___ verte pronto!' (poder, subj. imp.)",
          answer: "pudiera"
        }
      ]
    },
    {
      title: "Módulo 2 – Las Oraciones Condicionales",
      content: `
        <h2>Tipos de orações condicionais</h2>
        <p>Expressam condições e suas consequências. Em espanhol há três tipos principais.</p>

        <h2>Tipo 1 – Condição real (possível)</h2>
        <table>
          <tr><th>Condição</th><th>Resultado</th></tr>
          <tr><td>Si + presente indicativo</td><td>futuro / imperativo / presente</td></tr>
          <tr><td>Si estudias mucho,</td><td>aprobarás el examen.</td></tr>
          <tr><td>Si tienes hambre,</td><td>come algo.</td></tr>
        </table>

        <h2>Tipo 2 – Condição hipotética (improvável)</h2>
        <table>
          <tr><th>Condição</th><th>Resultado</th></tr>
          <tr><td>Si + subj. imperfecto</td><td>condicional simple</td></tr>
          <tr><td>Si tuviera dinero,</td><td>viajaría por el mundo.</td></tr>
          <tr><td>Si fuera tú,</td><td>no lo haría.</td></tr>
        </table>

        <h2>Tipo 3 – Condição irreal no passado</h2>
        <table>
          <tr><th>Condição</th><th>Resultado</th></tr>
          <tr><td>Si + subj. pluscuamperfecto</td><td>condicional compuesto</td></tr>
          <tr><td>Si hubiera estudiado,</td><td>habría aprobado.</td></tr>
          <tr><td>Si no hubiera llovido,</td><td>habríamos salido.</td></tr>
        </table>

        <div class="example-box">
          <strong>Tipo 1:</strong> Si <em>llueve</em>, <em>cogeré</em> el paraguas.<br>
          <strong>Tipo 2:</strong> Si <em>pudiera</em>, <em>viviría</em> en la playa.<br>
          <strong>Tipo 3:</strong> Si <em>hubiera sabido</em>, te lo <em>habría dicho</em>.
        </div>

        <div class="tip-box">
          Dica: <strong>Atenção:</strong> Nunca use o futuro depois de "si" condicional: ❌ Si <u>tendré</u> tiempo. - Si <u>tengo</u> tiempo.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual é a forma correta? 'Si ___ tiempo, te llamaría.'",
          options: ["tendré", "tengo", "tuviera", "tuviera / tendría"],
          answer: 3
        },
        {
          type: "tf",
          question: "É correto dizer: 'Si tendrás tiempo, llámame.'",
          answer: false
        },
        {
          type: "fill",
          question: "Complete (tipo 1): 'Si ___ hambre, dímelo.' (tener, presente)",
          answer: "tienes"
        }
      ]
    },
    {
      title: "Módulo 3 – La Voz Pasiva",
      content: `
        <h2>Voz passiva em espanhol</h2>
        <p>Usada quando o foco está na ação ou no objeto, não no sujeito que pratica a ação.</p>

        <h2>Voz passiva com SER</h2>
        <p><strong>SER + particípio (concorda em gênero e número) + por + agente</strong></p>
        <table>
          <tr><th>Ativa</th><th>Passiva</th></tr>
          <tr><td>Cervantes escribió el Quijote.</td><td>El Quijote fue escrito por Cervantes.</td></tr>
          <tr><td>El alcalde inauguró el parque.</td><td>El parque fue inaugurado por el alcalde.</td></tr>
          <tr><td>Construyeron el puente en 1990.</td><td>El puente fue construido en 1990.</td></tr>
        </table>

        <h2>Passiva reflexa (SE passivo) — mais comum na fala</h2>
        <p><strong>SE + verbo (3ª pessoa) + sujeito</strong></p>
        <div class="example-box">
          <em>Se vende</em> piso. (Vende-se apartamento.)<br>
          <em>Se habla</em> español aquí. (Fala-se espanhol aqui.)<br>
          <em>Se alquilan</em> habitaciones. (Alugam-se quartos.)<br>
          <em>Se prohíbe</em> fumar. (Proibido fumar.)
        </div>

        <h2>Passiva com ESTAR</h2>
        <p>Descreve o <strong>estado resultante</strong> de uma ação:</p>
        <div class="example-box">
          La tienda <em>está cerrada</em>. (A loja está fechada — estado)<br>
          La tienda <em>fue cerrada</em> a las 10. (A loja foi fechada às 10 — ação)
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> A passiva reflexa com <em>se</em> é muito mais comum na fala cotidiana do que a passiva com <em>ser</em>, que soa mais formal ou jornalística.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Transforme em voz passiva: 'El chef preparó la cena.'",
          options: ["La cena fue preparada por el chef.", "La cena se preparó el chef.", "El chef fue preparado por la cena.", "La cena era preparada el chef."],
          answer: 0
        },
        {
          type: "tf",
          question: "'Se venden pisos' é um exemplo de passiva reflexa.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: '___ habla inglés en esta oficina.' (passiva reflexa)",
          answer: "Se"
        }
      ]
    },
    {
      title: "Módulo 4 – El Estilo Indirecto",
      content: `
        <h2>O discurso indireto</h2>
        <p>Usado para relatar o que alguém disse, pensou ou perguntou, sem citação direta.</p>

        <h2>Verbos introdutores</h2>
        <table>
          <tr><th>Verbo</th><th>Uso</th></tr>
          <tr><td>decir que</td><td>para afirmações</td></tr>
          <tr><td>preguntar si / qué / cómo...</td><td>para perguntas</td></tr>
          <tr><td>pedir que + subjuntivo</td><td>para pedidos</td></tr>
          <tr><td>contar que</td><td>para narrar</td></tr>
          <tr><td>explicar que</td><td>para explicar</td></tr>
        </table>

        <h2>Mudanças de tempo verbal</h2>
        <table>
          <tr><th>Direto</th><th>Indireto (verbo passado)</th></tr>
          <tr><td>Presente → "Tengo hambre"</td><td>Imperfecto → Dijo que <em>tenía</em> hambre.</td></tr>
          <tr><td>Futuro → "Vendré mañana"</td><td>Condicional → Dijo que <em>vendría</em> al día siguiente.</td></tr>
          <tr><td>Indefinido → "Fui al cine"</td><td>Pluscuamperfecto → Dijo que <em>había ido</em> al cine.</td></tr>
          <tr><td>Imperativo → "Ven aquí"</td><td>Subj. imperf. → Me pidió que <em>fuera</em> allí.</td></tr>
        </table>

        <h2>Mudanças de expressões temporais</h2>
        <div class="example-box">
          hoy → ese día · ayer → el día anterior · mañana → al día siguiente<br>
          aquí → allí · este → ese · ahora → entonces
        </div>

        <div class="example-box">
          Direto: "Estoy muy cansado."<br>
          Indireto: Dijo que <strong>estaba</strong> muy cansado.<br><br>
          Direto: "¿Vienes a la fiesta?"<br>
          Indireto: Me preguntó si <strong>iba</strong> a la fiesta.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Se o verbo introdutor está no presente (<em>dice que</em>), os tempos verbais geralmente não mudam: <em>Dice que está cansado</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Passe para o indireto: 'Tengo mucho trabajo.' → Dijo que ___",
          options: ["tiene mucho trabajo", "tenía mucho trabajo", "tuvo mucho trabajo", "tendrá mucho trabajo"],
          answer: 1
        },
        {
          type: "tf",
          question: "No estilo indireto, 'mañana' se transforma em 'al día siguiente'.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'Me pidió que ___ temprano.' (llegar, subj. imperfecto)",
          answer: "llegara"
        }
      ]
    },
    {
      title: "Módulo 5 – Debate y Argumentación",
      content: `
        <h2>Estrutura de um argumento</h2>
        <p>Para debater e argumentar em espanhol de forma eficaz, é essencial conhecer as expressões adequadas.</p>

        <h2>Introduzir o tema</h2>
        <table>
          <tr><th>Expresión</th><th>Significado</th></tr>
          <tr><td>El tema que voy a tratar es...</td><td>O tema que vou tratar é...</td></tr>
          <tr><td>Hoy en día, uno de los problemas más importantes es...</td><td>Hoje em dia, um dos problemas mais importantes é...</td></tr>
          <tr><td>En los últimos años se ha debatido mucho sobre...</td><td>Nos últimos anos muito se debateu sobre...</td></tr>
        </table>

        <h2>Defender uma posição</h2>
        <table>
          <tr><th>A favor</th><th>Contra</th></tr>
          <tr><td>Estoy a favor de...</td><td>Estoy en contra de...</td></tr>
          <tr><td>Defiendo la idea de que...</td><td>Me opongo a...</td></tr>
          <tr><td>Un argumento clave es...</td><td>El principal problema es...</td></tr>
          <tr><td>Los datos demuestran que...</td><td>Sin embargo, hay que tener en cuenta que...</td></tr>
        </table>

        <h2>Concluir</h2>
        <div class="example-box">
          En conclusión... / En resumen... / Para concluir...<br>
          Por todo lo expuesto, creo que...<br>
          En definitiva, la solución más viable sería...
        </div>

        <h2>Ceder e rebater</h2>
        <div class="example-box">
          Es cierto que..., <strong>pero</strong> hay que considerar que...<br>
          Entiendo tu punto de vista, <strong>sin embargo</strong>...<br>
          <strong>Aunque</strong> es verdad que..., no podemos ignorar que...
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Em debates, é importante reconhecer o argumento do outro antes de rebatê-lo. Expressões como <em>entiendo tu punto</em> ou <em>es cierto que</em> mostram inteligência argumentativa.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual expressão serve para concluir um argumento?",
          options: ["Hoy en día...", "En conclusión...", "Estoy a favor de...", "Un argumento clave es..."],
          answer: 1
        },
        {
          type: "tf",
          question: "'Estoy en contra de' é usado para defender uma ideia positivamente.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '___ todo lo expuesto, creo que debemos actuar.' (Para concluir)",
          answer: "Por"
        }
      ]
    }
    ,
    {
      title: "Módulo 6 – Literatura y Arte",
      content: `
        <h2>Vocabulário literário e artístico</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el/la escritor/a</td><td>o/a escritor(a)</td></tr>
          <tr><td>la novela / el cuento</td><td>o romance / o conto</td></tr>
          <tr><td>la poesía / el poema</td><td>a poesia / o poema</td></tr>
          <tr><td>el/la pintor/a</td><td>o/a pintor(a)</td></tr>
          <tr><td>la obra maestra</td><td>a obra-prima</td></tr>
          <tr><td>el movimiento artístico</td><td>o movimento artístico</td></tr>
          <tr><td>el/la protagonista</td><td>o/a protagonista</td></tr>
          <tr><td>el argumento / la trama</td><td>o enredo</td></tr>
          <tr><td>el personaje</td><td>o personagem</td></tr>
          <tr><td>el siglo (s. XVI, XVII...)</td><td>o século</td></tr>
        </table>

        <h2>Grandes nomes da cultura hispana</h2>
        <table>
          <tr><th>Nombre</th><th>Campo</th><th>Obra notable</th></tr>
          <tr><td>Miguel de Cervantes</td><td>Literatura</td><td>Don Quijote de la Mancha</td></tr>
          <tr><td>Gabriel García Márquez</td><td>Literatura</td><td>Cien años de soledad</td></tr>
          <tr><td>Pablo Picasso</td><td>Pintura</td><td>Guernica</td></tr>
          <tr><td>Salvador Dalí</td><td>Pintura/Surrealismo</td><td>La persistencia de la memoria</td></tr>
          <tr><td>Federico García Lorca</td><td>Poesía/Teatro</td><td>Romancero gitano</td></tr>
          <tr><td>Isabel Allende</td><td>Literatura</td><td>La casa de los espíritus</td></tr>
        </table>

        <div class="example-box">
          <em>Don Quijote de la Mancha</em>, escrita por Cervantes en el siglo XVII, es considerada la primera novela moderna.<br><br>
          El <em>realismo mágico</em> de García Márquez mezcla lo cotidiano con elementos fantásticos de forma natural.<br><br>
          <em>Guernica</em>, de Picasso, es un símbolo del horror de la guerra civil española.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Para falar de arte e literatura use o presente histórico: <em>Cervantes escribe sobre un caballero que...</em> — isso dá mais vivacidade ao texto.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Quem escreveu 'Cien años de soledad'?",
          options: ["Pablo Neruda", "Isabel Allende", "Gabriel García Márquez", "Mario Vargas Llosa"],
          answer: 2
        },
        {
          type: "tf",
          question: "'Guernica' é uma pintura de Salvador Dalí.",
          answer: false
        },
        {
          type: "fill",
          question: "O enredo de um romance em espanhol se chama 'el ___'.",
          answer: "argumento|trama"
        }
      ]
    },
    {
      title: "Módulo 7 – Economía y Trabajo",
      content: `
        <h2>Vocabulário econômico</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el mercado laboral</td><td>o mercado de trabalho</td></tr>
          <tr><td>la inflación</td><td>a inflação</td></tr>
          <tr><td>el desempleo / el paro</td><td>o desemprego</td></tr>
          <tr><td>el PIB (Producto Interior Bruto)</td><td>o PIB</td></tr>
          <tr><td>la bolsa de valores</td><td>a bolsa de valores</td></tr>
          <tr><td>la inversión</td><td>o investimento</td></tr>
          <tr><td>el presupuesto</td><td>o orçamento</td></tr>
          <tr><td>la deuda</td><td>a dívida</td></tr>
          <tr><td>las exportaciones/importaciones</td><td>as exportações/importações</td></tr>
          <tr><td>la huelga</td><td>a greve</td></tr>
        </table>

        <h2>El mundo laboral moderno</h2>
        <table>
          <tr><th>Concepto</th><th>Significado</th></tr>
          <tr><td>el emprendimiento</td><td>o empreendedorismo</td></tr>
          <tr><td>el freelance / autónomo</td><td>o freelancer / autônomo</td></tr>
          <tr><td>la startup</td><td>a startup</td></tr>
          <tr><td>el networking</td><td>o networking</td></tr>
          <tr><td>la conciliación laboral</td><td>o equilíbrio trabalho-vida</td></tr>
          <tr><td>el burnout / síndrome del quemado</td><td>o burnout</td></tr>
        </table>

        <div class="example-box">
          La tasa de desempleo juvenil sigue siendo uno de los mayores retos económicos de España.<br>
          Cada vez más profesionales optan por trabajar como autónomos para tener más flexibilidad.<br>
          La inflación ha subido considerablemente en los últimos años, afectando el poder adquisitivo.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Para discutir economia, use conectores de causa-consecuencia: <em>debido a, a causa de, como consecuencia, esto ha provocado que...</em>
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'greve' em espanhol?",
          options: ["la deuda", "la huelga", "la inflación", "el paro"],
          answer: 1
        },
        {
          type: "tf",
          question: "'El autónomo' é o trabalhador que tem carteira assinada em uma empresa.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: 'La ___ de desempleo ha bajado este año.' (taxa)",
          answer: "tasa"
        }
      ]
    },
    {
      title: "Módulo 8 – Política y Sociedad",
      content: `
        <h2>Vocabulário político</h2>
        <table>
          <tr><th>Español</th><th>Português</th></tr>
          <tr><td>el gobierno</td><td>o governo</td></tr>
          <tr><td>las elecciones</td><td>as eleições</td></tr>
          <tr><td>el partido político</td><td>o partido político</td></tr>
          <tr><td>el parlamento</td><td>o parlamento</td></tr>
          <tr><td>la democracia</td><td>a democracia</td></tr>
          <tr><td>los derechos humanos</td><td>os direitos humanos</td></tr>
          <tr><td>la igualdad de género</td><td>a igualdade de gênero</td></tr>
          <tr><td>la inmigración</td><td>a imigração</td></tr>
          <tr><td>la corrupción</td><td>a corrupção</td></tr>
          <tr><td>el Estado de bienestar</td><td>o Estado de bem-estar social</td></tr>
        </table>

        <h2>Debates sociais atuais</h2>
        <table>
          <tr><th>Tema</th><th>Vocabulário clave</th></tr>
          <tr><td>Medio ambiente</td><td>sostenibilidad, emisiones, acuerdo climático</td></tr>
          <tr><td>Igualdad</td><td>brecha salarial, feminismo, discriminación</td></tr>
          <tr><td>Tecnología</td><td>privacidad, regulación, IA</td></tr>
          <tr><td>Sanidad</td><td>sanidad pública, sistema sanitario, acceso</td></tr>
        </table>

        <div class="example-box">
          El debate sobre la inmigración divide a la sociedad entre quienes defienden políticas de integración y quienes abogan por mayor control en las fronteras.<br><br>
          La brecha salarial entre hombres y mujeres sigue siendo una asignatura pendiente en muchos países hispanohablantes.
        </div>

        <div class="tip-box">
          Dica: <strong>Expresión útil:</strong> <em>una asignatura pendiente</em> = algo que aún está por resolver (literalmente "uma matéria pendente").
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'direitos humanos' em espanhol?",
          options: ["los derechos políticos", "los derechos humanos", "los derechos civiles", "los derechos sociales"],
          answer: 1
        },
        {
          type: "tf",
          question: "'La brecha salarial' se refere à diferença de salários entre homens e mulheres.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'La ___ de género es un tema central en el debate político.' (igualdade)",
          answer: "igualdad"
        }
      ]
    },
    {
      title: "Módulo 9 – Recapitulação B2",
      content: `
        <h2>¡Excelente! Você completou o nível B2!</h2>
        <p>Com o B2 você atingiu um nível <strong>avançado-independente</strong>. Você é capaz de interagir com fluidez com falantes nativos e compreender textos complexos.</p>

        <h2>Gramática do B2</h2>
        <table>
          <tr><th>Tema</th><th>Exemplo</th></tr>
          <tr><td>Subjuntivo Imperfecto</td><td>Si tuviera tiempo, estudiaría más.</td></tr>
          <tr><td>Condicional tipo 2 e 3</td><td>Si hubiera sabido, habría actuado.</td></tr>
          <tr><td>Voz passiva</td><td>El libro fue escrito por García Márquez.</td></tr>
          <tr><td>Passiva reflexa</td><td>Se venden pisos / Se habla español.</td></tr>
          <tr><td>Estilo indireto</td><td>Dijo que tenía hambre / Me pidió que llegara.</td></tr>
          <tr><td>Argumentação</td><td>En conclusión, por lo tanto, sin embargo...</td></tr>
        </table>

        <h2>Conquistas do B2</h2>
        <div class="example-box">
          - Comunicar-se com fluência em situações complexas<br>
          - Debater e argumentar em espanhol<br>
          - Compreender textos literários e jornalísticos<br>
          - Narrar e relatar com variedade de tempos verbais<br>
          - Discutir temas de economia, política e sociedade<br>
          - Conhecer a cultura e literatura hispana
        </div>

        <h2>Próximo passo: Nível C1</h2>
        <p>No C1 você vai trabalhar com registro formal e informal, nuances de significado, textos acadêmicos e profissionais, e alcançar a maestria no espanhol!</p>

        <div class="tip-box">
          Dica: <strong>Conselho:</strong> Leia jornais em espanhol (El País, El Mundo, La Nación), assista filmes sem legendas e escreva textos argumentativos. Você já está muito perto da fluência nativa!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual é a construção correta do condicional tipo 3?",
          options: [
            "Si tuviera dinero, compraría.",
            "Si hubiera tenido dinero, habría comprado.",
            "Si tengo dinero, compro.",
            "Si tendría dinero, compraría."
          ],
          answer: 1
        },
        {
          type: "tf",
          question: "No nível B2 o aluno já consegue comunicar-se com fluência sobre temas complexos.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete a passiva: 'El puente ___ construido en 1985.' (ser, indefinido)",
          answer: "fue"
        }
      ]
    }
  ],
  C1: [
    {
      title: "Módulo 1 – El Subjuntivo en todas sus formas",
      content: `
        <h2>Panorama completo do Subjuntivo</h2>
        <p>No C1 consolidamos todos os tempos do subjuntivo e seus usos mais sofisticados.</p>

        <h2>Los cuatro tiempos del Subjuntivo</h2>
        <table>
          <tr><th>Tiempo</th><th>Formación</th><th>Uso principal</th></tr>
          <tr><td>Presente</td><td>hable, coma, viva</td><td>Presente/futuro con verbo principal en presente</td></tr>
          <tr><td>Imperfecto</td><td>hablara, comiera</td><td>Pasado/hipotético con verbo principal en pasado</td></tr>
          <tr><td>Perfecto</td><td>haya hablado</td><td>Acción anterior al presente del verbo principal</td></tr>
          <tr><td>Pluscuamperfecto</td><td>hubiera hablado</td><td>Acción anterior al pasado / condicional tipo 3</td></tr>
        </table>

        <h2>Concordância temporal (Consecutio temporum)</h2>
        <table>
          <tr><th>Verbo principal</th><th>Subjuntivo</th><th>Exemplo</th></tr>
          <tr><td>Presente / Futuro</td><td>Presente subj.</td><td>Quiero que <em>vengas</em>.</td></tr>
          <tr><td>Presente / Futuro</td><td>Perfecto subj.</td><td>No creo que <em>haya llegado</em>.</td></tr>
          <tr><td>Pasado / Condicional</td><td>Imperfecto subj.</td><td>Quería que <em>vinieras</em>.</td></tr>
          <tr><td>Pasado / Condicional</td><td>Pluscuamp. subj.</td><td>No creía que <em>hubiera llegado</em>.</td></tr>
        </table>

        <h2>Usos avançados do subjuntivo</h2>
        <div class="example-box">
          <strong>Orações relativas:</strong> Busco un piso que <em>tenga</em> terraza. (indeterminado)<br>
          <strong>Temporal:</strong> Cuando <em>llegues</em>, llámame. (futuro)<br>
          <strong>Concessivo:</strong> Aunque <em>llueva</em>, saldré. (hipotético)<br>
          <strong>Final:</strong> Te lo explico para que <em>entiendas</em>.<br>
          <strong>Desejo:</strong> ¡Ojalá <em>hubiera</em> aprobado!
        </div>

        <div class="tip-box">
          Dica: <strong>Clave:</strong> A diferença entre indicativo e subjuntivo nas relativas: <em>Busco al chico que <u>habla</u> chino</em> (sei quem é) vs. <em>Busco un chico que <u>hable</u> chino</em> (não sei quem é).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "'No creo que ella __ llegado todavía.' Qual forma usar?",
          options: ["ha", "haya", "hubiera", "había"],
          answer: 1
        },
        {
          type: "tf",
          question: "Após 'cuando' referindo-se ao futuro, usa-se o subjuntivo.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'Quería que tú me ___ la verdad.' (decir, subj. imperf.)",
          answer: "dijeras"
        }
      ]
    },
    {
      title: "Módulo 2 – Las Perífrasis Verbales",
      content: `
        <h2>O que são perífrases verbais?</h2>
        <p>São construções formadas por um verbo auxiliar conjugado + infinitivo, gerúndio ou particípio, que expressam matizes de aspecto, modalidade ou tempo.</p>

        <h2>Perífrases de infinitivo</h2>
        <table>
          <tr><th>Perífrase</th><th>Significado</th><th>Exemplo</th></tr>
          <tr><td>ir a + inf.</td><td>futuro imediato</td><td>Voy a salir.</td></tr>
          <tr><td>volver a + inf.</td><td>repetição</td><td>Volvió a llamar.</td></tr>
          <tr><td>dejar de + inf.</td><td>interrupção</td><td>Dejó de fumar.</td></tr>
          <tr><td>ponerse a + inf.</td><td>início súbito</td><td>Se puso a llorar.</td></tr>
          <tr><td>llegar a + inf.</td><td>atingir um resultado</td><td>Llegó a ser presidente.</td></tr>
          <tr><td>acabar de + inf.</td><td>ação recém-concluída</td><td>Acabo de comer.</td></tr>
          <tr><td>tener que + inf.</td><td>obrigação</td><td>Tengo que estudiar.</td></tr>
          <tr><td>deber (de) + inf.</td><td>obrigação / probabilidade</td><td>Debe de estar enfermo.</td></tr>
        </table>

        <h2>Perífrases de gerúndio</h2>
        <table>
          <tr><th>Perífrase</th><th>Significado</th><th>Exemplo</th></tr>
          <tr><td>estar + gerundio</td><td>ação em curso</td><td>Estoy estudiando.</td></tr>
          <tr><td>seguir + gerundio</td><td>continuidade</td><td>Sigue lloviendo.</td></tr>
          <tr><td>llevar + gerundio</td><td>duração acumulada</td><td>Llevo tres horas esperando.</td></tr>
          <tr><td>andar + gerundio</td><td>atividade habitual/vaga</td><td>Anda buscando trabajo.</td></tr>
        </table>

        <div class="example-box">
          <em>Acabo de</em> terminar el informe — no puedo hablar ahora.<br>
          <em>Llevo</em> dos años <em>viviendo</em> en Madrid y me encanta.<br>
          <em>Dejó de</em> hablar con ella después de la discusión.<br>
          <em>Volvió a</em> intentarlo y esta vez lo consiguió.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> <em>Deber + inf.</em> = obrigação (<em>Debes estudiar</em>). <em>Deber de + inf.</em> = probabilidade (<em>Debe de ser tarde</em>).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual perífrase indica que uma ação acaba de acontecer?",
          options: ["ir a + inf.", "acabar de + inf.", "volver a + inf.", "seguir + gerundio"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Llevo tres horas esperando' indica que a espera durou apenas 3 minutos.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '___ de llamarte pero no contestaste.' (acabar, yo)",
          answer: "Acabo"
        }
      ]
    },
    {
      title: "Módulo 3 – Registro Formal e Informal",
      content: `
        <h2>Los registros del español</h2>
        <p>O espanhol varia muito segundo o contexto. Dominar os diferentes registros é essencial no C1.</p>

        <h2>Características do registo formal</h2>
        <table>
          <tr><th>Aspecto</th><th>Registo formal</th><th>Registo informal</th></tr>
          <tr><td>Tratamento</td><td>usted, ustedes</td><td>tú, vosotros</td></tr>
          <tr><td>Vocabulário</td><td>solicitar, requerir, manifestar</td><td>pedir, necesitar, decir</td></tr>
          <tr><td>Verbos</td><td>quisiera, podría, sería posible</td><td>quiero, puedo, ¿puedes?</td></tr>
          <tr><td>Frases</td><td>Me dirijo a usted para...</td><td>Te escribo porque...</td></tr>
          <tr><td>Marcadores</td><td>No obstante, en consecuencia</td><td>pero, entonces, o sea</td></tr>
        </table>

        <h2>Cartas e e-mails formais</h2>
        <div class="example-box">
          <strong>Abertura:</strong> Estimado/a Sr./Sra. [apellido]: / A quien corresponda:<br>
          <strong>Objetivo:</strong> Me dirijo a usted con el fin de... / En relación con...<br>
          <strong>Desenvolvimento:</strong> Adjunto encontrará... / Les comunico que...<br>
          <strong>Encerramento:</strong> En espera de su respuesta, le saluda atentamente, / Quedo a su disposición.
        </div>

        <h2>Coloquialismos e gírias</h2>
        <table>
          <tr><th>Informal / Coloquial</th><th>Significado</th></tr>
          <tr><td>tío/tía (España)</td><td>cara / mano (tratamento informal)</td></tr>
          <tr><td>molar</td><td>gostar muito / ser legal</td></tr>
          <tr><td>flipar</td><td>ficar impressionado / enlouquecer</td></tr>
          <tr><td>currar</td><td>trabalhar</td></tr>
          <tr><td>ligar</td><td>flertar / ficar</td></tr>
          <tr><td>o sea</td><td>ou seja / quer dizer</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Num contexto profissional, errar para o lado formal é sempre mais seguro. O registro informal pode parecer desrespeitoso em situações inadequadas.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual é a forma mais formal de pedir algo?",
          options: ["Quiero que me ayudes.", "¿Puedes ayudarme?", "Quisiera solicitar su ayuda.", "Dame una mano."],
          answer: 2
        },
        {
          type: "tf",
          question: "'Molar' é um verbo coloquial espanhol que significa gostar muito de algo.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete o encerramento formal: 'Le saluda ___.' (atenciosamente)",
          answer: "atentamente"
        }
      ]
    },
    {
      title: "Módulo 4 – Textos Académicos y Profesionales",
      content: `
        <h2>Tipos de textos formais</h2>
        <table>
          <tr><th>Tipo</th><th>Características</th></tr>
          <tr><td>El ensayo</td><td>Argumentativo, tese + desenvolvimento + conclusão</td></tr>
          <tr><td>El informe</td><td>Objetivo, dados, análise, recomendações</td></tr>
          <tr><td>La reseña</td><td>Descrição + avaliação de obra/produto</td></tr>
          <tr><td>El artículo de opinión</td><td>Posição clara, argumentos, linguagem acessível</td></tr>
          <tr><td>La carta formal</td><td>Estrutura rígida, tratamento formal</td></tr>
        </table>

        <h2>Estrutura de um ensaio</h2>
        <div class="example-box">
          <strong>1. Introducción:</strong> Presentar el tema, contextualizar, tesis.<br>
          <strong>2. Desarrollo:</strong> Argumentos a favor y en contra con ejemplos.<br>
          <strong>3. Conclusión:</strong> Síntesis, posición final, perspectiva de futuro.
        </div>

        <h2>Conectores acadêmicos</h2>
        <table>
          <tr><th>Función</th><th>Conectores</th></tr>
          <tr><td>Introduzir</td><td>En primer lugar, cabe señalar que, conviene destacar</td></tr>
          <tr><td>Adicionar</td><td>Asimismo, del mismo modo, cabe añadir que</td></tr>
          <tr><td>Contrastar</td><td>Sin embargo, no obstante, a pesar de ello</td></tr>
          <tr><td>Exemplificar</td><td>A modo de ejemplo, tal es el caso de, sirva de muestra</td></tr>
          <tr><td>Concluir</td><td>En definitiva, a modo de conclusión, todo ello apunta a</td></tr>
        </table>

        <div class="example-box">
          <em>Conviene destacar</em> que el cambio climático es, <em>sin lugar a dudas</em>, el mayor desafío de nuestra era. <em>Cabe señalar</em>, <em>asimismo</em>, que las soluciones tecnológicas, <em>si bien</em> prometedoras, no son suficientes por sí solas. <em>En definitiva</em>, se requiere un cambio estructural en nuestros modelos de consumo.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Evite a 1ª pessoa em textos acadêmicos formais. Prefira: <em>cabe señalar</em> a <em>quiero decir</em>; <em>se observa que</em> a <em>veo que</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual conector é adequado para introduzir um exemplo acadêmico?",
          options: ["Sin embargo", "A modo de ejemplo", "En definitiva", "No obstante"],
          answer: 1
        },
        {
          type: "tf",
          question: "Em textos acadêmicos formais, recomenda-se usar a 1ª pessoa frequentemente.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '___ señalar que los datos confirman esta hipótesis.' (Convém destacar)",
          answer: "Cabe"
        }
      ]
    },
    {
      title: "Módulo 5 – Comunicación No Verbal y Cultural",
      content: `
        <h2>A comunicação não verbal no mundo hispano</h2>
        <p>Cerca de 70% da comunicação humana é não verbal. Compreender os gestos e comportamentos é essencial para evitar mal-entendidos culturais.</p>

        <h2>Gestos típicos do mundo hispano</h2>
        <table>
          <tr><th>Gesto</th><th>Significado</th></tr>
          <tr><td>Juntar dedos e agitar a mão</td><td>"Há muita gente" ou "Está cheio"</td></tr>
          <tr><td>Tocar a sobrancelha com o dedo</td><td>"Cuidado" ou "Estou de olho em você"</td></tr>
          <tr><td>Beijo no rosto ao cumprimentar</td><td>Cumprimento afetivo (1 ou 2 beijos)</td></tr>
          <tr><td>Contato físico durante conversa</td><td>Normal e não invasivo na cultura hispana</td></tr>
          <tr><td>Falar alto e com gestos amplos</td><td>Entusiasmo e expressividade, não agressividade</td></tr>
        </table>

        <h2>Diferenças culturais importantes</h2>
        <table>
          <tr><th>Cultura hispana</th><th>Como entender</th></tr>
          <tr><td>Chegar atrasado</td><td>Comum e socialmente aceito em contextos informais</td></tr>
          <tr><td>Interromper na conversa</td><td>Sinal de interesse, não de falta de educação</td></tr>
          <tr><td>Recusar comida oferecida</td><td>Pode parecer descortês; aceite ao menos uma vez</td></tr>
          <tr><td>Falar sobre dinheiro</td><td>Considerado um tema mais privado que em outras culturas</td></tr>
          <tr><td>Silêncio na conversa</td><td>Pode ser percebido como desconforto ou desinteresse</td></tr>
        </table>

        <div class="example-box">
          Em contextos profissionais formais na Espanha, a pontualidade é esperada. Já em contextos sociais, chegar 15–30 minutos depois do horário combinado é completamente normal e até esperado.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> A expressão <em>la hora española</em> refere-se justamente ao hábito de chegar atrasado. Mas atenção: no trabalho e em situações formais, a pontualidade é valorizada!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Na cultura hispana, interromper alguém durante uma conversa geralmente indica:",
          options: ["Falta de educação", "Interesse e envolvimento", "Agressividade", "Tédio"],
          answer: 1
        },
        {
          type: "tf",
          question: "O contato físico durante conversas é considerado invasivo na maioria dos países hispânicos.",
          answer: false
        },
        {
          type: "fill",
          question: "A expressão '___ española' refere-se ao hábito cultural de chegar atrasado.",
          answer: "la hora|hora"
        }
      ]
    },
    {
      title: "Módulo 6 – El Español en el Mundo Profesional",
      content: `
        <h2>Comunicação profissional em espanhol</h2>
        <p>O espanhol é a 2ª língua mais falada no mundo dos negócios. Dominar seu uso profissional abre portas em toda a América Latina e Espanha.</p>

        <h2>Reuniões e negociações</h2>
        <table>
          <tr><th>Situación</th><th>Expresión</th></tr>
          <tr><td>Abrir uma reunião</td><td>Damos comienzo a la reunión. / Pasemos al orden del día.</td></tr>
          <tr><td>Pedir a palavra</td><td>Si me permiten... / Quisiera añadir que...</td></tr>
          <tr><td>Resumir</td><td>En resumen... / Para recapitular...</td></tr>
          <tr><td>Propor</td><td>Propongo que... / ¿Qué les parece si...?</td></tr>
          <tr><td>Fechar acordo</td><td>Llegamos a un acuerdo. / Quedamos en que...</td></tr>
          <tr><td>Encerrar</td><td>Levantamos la sesión. / Damos por concluida la reunión.</td></tr>
        </table>

        <h2>Correspondência profissional</h2>
        <table>
          <tr><th>Situación</th><th>Fórmula</th></tr>
          <tr><td>Enviar documento</td><td>Adjunto le remito... / En el archivo adjunto encontrará...</td></tr>
          <tr><td>Solicitar informação</td><td>Les rogaría que me facilitaran... / Agradeceré que me informen sobre...</td></tr>
          <tr><td>Confirmar</td><td>Por la presente, confirmo... / Me complace confirmarles...</td></tr>
          <tr><td>Reclamar</td><td>Lamentablemente, debo comunicarles que... / Me veo en la necesidad de...</td></tr>
        </table>

        <div class="example-box">
          <em>Me dirijo a ustedes con el fin de</em> presentar nuestra propuesta de colaboración.<br>
          <em>Agradeceríamos</em> que nos confirmaran su disponibilidad <em>a la mayor brevedad posible</em>.<br>
          <em>Quedamos a su entera disposición</em> para cualquier consulta adicional.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Expressões como <em>a la mayor brevedad posible</em> (o mais breve possível) e <em>a su entera disposición</em> (à inteira disposição) são marcas do espanhol profissional formal.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Como se diz 'Encerrar uma reunião' em espanhol?",
          options: ["Damos comienzo a la reunión.", "Levantamos la sesión.", "Pasemos al orden del día.", "Propongo que terminemos."],
          answer: 1
        },
        {
          type: "tf",
          question: "'Adjunto le remito' é usado para pedir informações por e-mail.",
          answer: false
        },
        {
          type: "fill",
          question: "Complete: '___ a su entera disposición para cualquier consulta.' (Quedamos)",
          answer: "Quedamos"
        }
      ]
    },
    {
      title: "Módulo 7 – Literatura Contemporánea",
      content: `
        <h2>La narrativa hispana contemporânea</h2>
        <p>A literatura hispana do século XX e XXI é rica, diversa e reconhecida mundialmente com vários Prêmios Nobel.</p>

        <h2>Prêmios Nobel de Literatura hispanos</h2>
        <table>
          <tr><th>Autor/a</th><th>País</th><th>Año</th></tr>
          <tr><td>Jacinto Benavente</td><td>España</td><td>1922</td></tr>
          <tr><td>Gabriela Mistral</td><td>Chile</td><td>1945</td></tr>
          <tr><td>Miguel Ángel Asturias</td><td>Guatemala</td><td>1967</td></tr>
          <tr><td>Pablo Neruda</td><td>Chile</td><td>1971</td></tr>
          <tr><td>Gabriel García Márquez</td><td>Colombia</td><td>1982</td></tr>
          <tr><td>Camilo José Cela</td><td>España</td><td>1989</td></tr>
          <tr><td>Octavio Paz</td><td>México</td><td>1990</td></tr>
          <tr><td>Mario Vargas Llosa</td><td>Perú</td><td>2010</td></tr>
        </table>

        <h2>Movimentos literários</h2>
        <table>
          <tr><th>Movimiento</th><th>Características</th><th>Autores clave</th></tr>
          <tr><td>Realismo mágico</td><td>Mezcla realidad y fantasía con naturalidad</td><td>García Márquez, Allende</td></tr>
          <tr><td>El boom latinoamericano</td><td>Renovación narrativa años 60-70</td><td>Cortázar, Fuentes, Vargas Llosa</td></tr>
          <tr><td>Poesía comprometida</td><td>Poesía política y social</td><td>Neruda, Lorca, Benedetti</td></tr>
          <tr><td>Literatura de la memoria</td><td>Dictaduras, exilio, identidad</td><td>Almudena Grandes, Javier Cercas</td></tr>
        </table>

        <div class="example-box">
          El <em>realismo mágico</em> de García Márquez en <em>Cien años de soledad</em> convierte lo extraordinario en cotidiano: los muertos conviven con los vivos, los años se repiten y el tiempo pierde su linealidad.<br><br>
          Mario Vargas Llosa, en obras como <em>La ciudad y los perros</em>, explora la corrupción moral y las estructuras de poder en América Latina.
        </div>

        <div class="tip-box">
          Dica: <strong>Para profundizar:</strong> Lee <em>Rayuela</em> de Cortázar (puede leerse en cualquier orden), <em>Ficciones</em> de Borges o <em>La casa de los espíritus</em> de Isabel Allende.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual autor ganhou o Nobel de Literatura em 1982?",
          options: ["Pablo Neruda", "Octavio Paz", "Gabriel García Márquez", "Mario Vargas Llosa"],
          answer: 2
        },
        {
          type: "tf",
          question: "O 'boom latinoamericano' foi um movimento literário dos anos 1960–70.",
          answer: true
        },
        {
          type: "fill",
          question: "O movimento que mistura realidade e fantasia naturalmente chama-se 'realismo ___'.",
          answer: "mágico"
        }
      ]
    },
    {
      title: "Módulo 8 – Filosofía y Pensamiento Hispano",
      content: `
        <h2>Pensadores hispanos destacados</h2>
        <table>
          <tr><th>Pensador</th><th>País/Época</th><th>Ideas principales</th></tr>
          <tr><td>José Ortega y Gasset</td><td>España, s. XX</td><td>Razón vital, "Yo soy yo y mi circunstancia"</td></tr>
          <tr><td>Miguel de Unamuno</td><td>España, s. XIX-XX</td><td>Existencialismo, el sentido trágico de la vida</td></tr>
          <tr><td>Paulo Freire</td><td>Brasil (influencia hispana)</td><td>Pedagogía del oprimido, educación liberadora</td></tr>
          <tr><td>Simón Bolívar</td><td>Venezuela, s. XIX</td><td>Independencia, unidad latinoamericana</td></tr>
          <tr><td>Sor Juana Inés de la Cruz</td><td>México, s. XVII</td><td>Feminismo avant-la-lettre, conocimiento y mujer</td></tr>
        </table>

        <h2>Conceptos filosóficos em espanhol</h2>
        <table>
          <tr><th>Concepto</th><th>Definición breve</th></tr>
          <tr><td>la cosmovisión</td><td>visão de mundo / Weltanschauung</td></tr>
          <tr><td>el libre albedrío</td><td>o livre-arbítrio</td></tr>
          <tr><td>la otredad</td><td>a alteridade / o conceito do "outro"</td></tr>
          <tr><td>el ser y la nada</td><td>o ser e o nada (existencialismo)</td></tr>
          <tr><td>la identidad colectiva</td><td>a identidade coletiva</td></tr>
        </table>

        <div class="example-box">
          Ortega y Gasset afirmaba que el ser humano no puede entenderse fuera de su contexto: <em>"Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo"</em>.<br><br>
          Unamuno exploró la angustia existencial ante la muerte y la búsqueda de inmortalidad en <em>Del sentimiento trágico de la vida</em>.
        </div>

        <div class="tip-box">
          Dica: <strong>Vocabulário filosófico útil:</strong> <em>plantear</em> (colocar uma questão), <em>cuestionar</em> (questionar), <em>reflexionar sobre</em> (refletir sobre), <em>abordar</em> (abordar).
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "A quem se atribui a frase 'Yo soy yo y mi circunstancia'?",
          options: ["Unamuno", "Ortega y Gasset", "Sor Juana Inés", "Bolívar"],
          answer: 1
        },
        {
          type: "tf",
          question: "'El libre albedrío' significa a ausência de consciência.",
          answer: false
        },
        {
          type: "fill",
          question: "A palavra espanhola para 'alteridade' (o conceito do outro) é 'la ___'.",
          answer: "otredad"
        }
      ]
    },
    {
      title: "Módulo 9 – Lengua e Identidad",
      content: `
        <h2>El español como lengua pluricéntrica</h2>
        <p>O espanhol não tem um único centro normativo. Cada país tem sua variedade legítima, com vocabulário, pronúncia e construções próprios.</p>

        <h2>Principales variedades del español</h2>
        <table>
          <tr><th>Variedad</th><th>Rasgos característicos</th></tr>
          <tr><td>Español peninsular (centro-norte)</td><td>Distinción c/z, vosotros, leísmo</td></tr>
          <tr><td>Español andaluz/canario</td><td>Seseo, aspiración de -s, entonación propia</td></tr>
          <tr><td>Español rioplatense</td><td>Voseo, entonación italiana, lunfardo</td></tr>
          <tr><td>Español mexicano</td><td>Influencia náhuatl, entonación característica</td></tr>
          <tr><td>Español caribeño</td><td>Aspiración/elisión de -s, velocidad alta</td></tr>
        </table>

        <h2>Lengua e identidad cultural</h2>
        <div class="example-box">
          La lengua no es solo un medio de comunicación — es un repositorio de cultura, historia y cosmovisión. Las palabras que una lengua tiene (y las que no tiene) revelan lo que una cultura considera importante.<br><br>
          El español tiene palabras sin traducción directa al portugués: <em>madrugada</em> (las horas entre medianoche y el amanecer), <em>sobremesa</em> (la conversación después de comer), <em>añoranza</em> (saudade).
        </div>

        <h2>El español y las lenguas indígenas</h2>
        <table>
          <tr><th>Palabra española</th><th>Origen indígena</th><th>Significado</th></tr>
          <tr><td>chocolate</td><td>náhuatl (xocolatl)</td><td>chocolate</td></tr>
          <tr><td>tomate</td><td>náhuatl (tomatl)</td><td>tomate</td></tr>
          <tr><td>cóndor</td><td>quechua (kuntur)</td><td>condor</td></tr>
          <tr><td>canoa</td><td>taíno</td><td>canoa</td></tr>
          <tr><td>gaucho</td><td>quechua/mapuche</td><td>vaqueiro da pampa</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Reflexão:</strong> <em>Sobremesa</em> — palavra espanhola sem equivalente em português — designa o tempo agradável de conversa que se passa à mesa depois de comer. Um conceito que diz muito sobre a cultura hispana!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "O 'voseo' é característico de qual variedade do espanhol?",
          options: ["Español peninsular", "Español mexicano", "Español rioplatense", "Español caribeño"],
          answer: 2
        },
        {
          type: "tf",
          question: "A palavra 'chocolate' tem origem no náhuatl, língua indígena do México.",
          answer: true
        },
        {
          type: "fill",
          question: "A palavra espanhola para 'a conversa após a refeição' é '___ '.",
          answer: "sobremesa"
        }
      ]
    },
    {
      title: "Módulo 10 – Recapitulação C1",
      content: `
        <h2>¡Enhorabuena! Você completou o nível C1!</h2>
        <p>O C1 representa a <strong>competência avançada</strong>. Você já é capaz de usar o espanhol com flexibilidade, eficácia e precisão em contextos sociais, acadêmicos e profissionais.</p>

        <h2>Competências adquiridas no C1</h2>
        <table>
          <tr><th>Competência</th><th>Exemplo</th></tr>
          <tr><td>Subjuntivo completo</td><td>Todos os tempos com concordância correta</td></tr>
          <tr><td>Perífrases verbais</td><td>Acabar de, llevar + gerundio, ponerse a...</td></tr>
          <tr><td>Registros</td><td>Adaptar o discurso ao contexto formal/informal</td></tr>
          <tr><td>Textos acadêmicos</td><td>Ensaio, informe, artigo de opinião</td></tr>
          <tr><td>Comunicação profissional</td><td>Reuniões, negociações, correspondência</td></tr>
          <tr><td>Cultura e identidade</td><td>Literatura, filosofia, variedades do espanhol</td></tr>
        </table>

        <div class="example-box">
          - Domínio completo do Subjuntivo<br>
          - Perífrases verbais com nuance<br>
          - Registro formal e acadêmico<br>
          - Textos argumentativos elaborados<br>
          - Comunicação profissional<br>
          - Consciência cultural e linguística
        </div>

        <h2>Próximo passo: Nível C2 — Maestría</h2>
        <p>O C2 é o nível de <strong>maestria</strong>. Você vai trabalhar com nuances sutis da língua, textos literários complexos, variedades diatópicas e comunicação em nível equivalente ao de um falante nativo culto.</p>

        <div class="tip-box">
          Dica: <strong>Conselho:</strong> Para o C2, mergulhe na língua: leia literatura original, assista filmes sem legendas, escreva diários em espanhol e busque interações com falantes nativos de diferentes países!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual perífrase indica uma ação que acaba de terminar?",
          options: ["ir a + inf.", "volver a + inf.", "acabar de + inf.", "ponerse a + inf."],
          answer: 2
        },
        {
          type: "tf",
          question: "No C1, o aluno já é capaz de usar o espanhol em contextos profissionais e acadêmicos com precisão.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: 'Si me ___ dicho antes, habría actuado diferente.' (subj. pluscuamp.)",
          answer: "hubieras|hubiera"
        }
      ]
    }
  ],
  C2: [
    {
      title: "Módulo 1 – Dominio del Subjuntivo y los Modos",
      content: `
        <h2>Modo indicativo vs. subjuntivo: a escolha como significado</h2>
        <p>No C2, a alternância entre modos deixa de ser uma regra gramatical e passa a ser uma <strong>escolha semântica</strong> que muda o significado da frase.</p>

        <h2>Contrastes de modo com mudança de sentido</h2>
        <table>
          <tr><th>Indicativo</th><th>Subjuntivo</th></tr>
          <tr><td>Cuando <em>llegues</em>, llámame. (futuro real)</td><td>Cuando <em>llegabas</em>, siempre llamabas. (hábito pasado)</td></tr>
          <tr><td>Busco al hombre que <em>habla</em> ruso. (identificado)</td><td>Busco un hombre que <em>hable</em> ruso. (no identificado)</td></tr>
          <tr><td>Aunque <em>está</em> cansado, trabaja. (es verdad)</td><td>Aunque <em>esté</em> cansado, trabajará. (hipotético)</td></tr>
          <tr><td>Como <em>llegas</em> tarde, nos vamos. (causa real)</td><td>Como <em>llegues</em> tarde, nos vamos. (advertencia)</td></tr>
        </table>

        <h2>El subjuntivo en oraciones independientes</h2>
        <div class="example-box">
          <strong>Deseo:</strong> ¡Ojalá <em>hubiera</em> podido verte!<br>
          <strong>Mandato suavizado:</strong> Que <em>pase</em> el siguiente. / Que <em>lo haga</em> él.<br>
          <strong>Duda retórica:</strong> ¿Quién <em>dijera</em> que llegaríamos hasta aquí?<br>
          <strong>Concesión imaginaria:</strong> Sea lo que <em>sea</em>, lo afrontaremos juntos.<br>
          <strong>Fórmula fija:</strong> Así <em>sea</em>. / No <em>sea</em> que... / Quizás <em>venga</em>.
        </div>

        <h2>El modo condicional como modo de la irrealidad</h2>
        <div class="example-box">
          <em>Sería</em> conveniente revisar los datos. (sugerencia diplomática)<br>
          <em>Debería</em> haberse pensado antes. (crítica atenuada)<br>
          <em>Podría</em> tratarse de un error. (hipótesis cautelosa)
        </div>

        <div class="tip-box">
          Dica: <strong>Nivel C2:</strong> La maestría consiste en usar el modo no solo correctamente sino estratégicamente — para matizar, suavizar, ironizar o implicar sin decir explícitamente.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "'Busco una secretaria que ___ tres idiomas.' ¿Qué forma es correcta?",
          options: ["habla", "hable", "hablara", "hablaría"],
          answer: 1
        },
        {
          type: "tf",
          question: "'Aunque está cansado' (indicativo) implica que la persona SÍ está cansada.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: '¡Ojalá ___ venido antes!' (venir, subj. pluscuamperfecto)",
          answer: "hubiera|hubieras"
        }
      ]
    },
    {
      title: "Módulo 2 – Estilística y Recursos Literarios",
      content: `
        <h2>Recursos retóricos e literários</h2>
        <p>A estilística estuda os mecanismos expressivos da língua. No C2 você deve reconhecê-los e usá-los na própria escrita.</p>

        <h2>Figuras de linguagem em espanhol</h2>
        <table>
          <tr><th>Recurso</th><th>Definición</th><th>Ejemplo</th></tr>
          <tr><td>La metáfora</td><td>Comparação implícita</td><td><em>Sus ojos son dos luceros.</em></td></tr>
          <tr><td>El símil / la comparación</td><td>Comparação explícita com "como"</td><td><em>Corre como el viento.</em></td></tr>
          <tr><td>La hipérbole</td><td>Exageração expressiva</td><td><em>Te lo he dicho mil veces.</em></td></tr>
          <tr><td>La ironía</td><td>Dizer o contrário do que se pensa</td><td><em>¡Qué puntual eres! (llegó tarde)</em></td></tr>
          <tr><td>La anáfora</td><td>Repetição no início de frases</td><td><em>Vine, vi, vencí.</em></td></tr>
          <tr><td>El oxímoron</td><td>Contradição expressiva</td><td><em>Un silencio ensordecedor.</em></td></tr>
          <tr><td>La perífrasis</td><td>Expressão indireta</td><td><em>El rey de la selva (= el león)</em></td></tr>
          <tr><td>La sinestesia</td><td>Mistura de sentidos</td><td><em>Un color estridente.</em></td></tr>
        </table>

        <h2>El estilo en la prosa literária</h2>
        <div class="example-box">
          <strong>Estilo directo vs. indirecto libre:</strong><br>
          Directo: Pensó: <em>"No puedo más."</em><br>
          Indirecto libre: <em>No podía más. ¿Para qué seguir?</em> (sin verbo introductor — fusión entre narrador y personaje)<br><br>
          <strong>Polisíndeton:</strong> <em>Y llovía y hacía frío y no había nadie.</em> (repetición de "y")<br>
          <strong>Asíndeton:</strong> <em>Llegó, saludó, se fue.</em> (sin conjunciones, efecto de rapidez)
        </div>

        <div class="tip-box">
          Dica: <strong>Para escribir mejor:</strong> Varía la longitud de las frases. Alterna frases cortas (impacto) con frases más largas y subordinadas (reflexión). Usa recursos retóricos con moderación para no cansar al lector.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "'Un silencio ensordecedor' es un ejemplo de:",
          options: ["metáfora", "hipérbole", "oxímoron", "anáfora"],
          answer: 2
        },
        {
          type: "tf",
          question: "El estilo indirecto libre mezcla la voz del narrador con la del personaje sin marcadores explícitos.",
          answer: true
        },
        {
          type: "fill",
          question: "La figura que consiste en exagerar para dar énfasis se llama la ___.",
          answer: "hipérbole"
        }
      ]
    },
    {
      title: "Módulo 3 – El Español Jurídico y Administrativo",
      content: `
        <h2>O espanhol nos contextos jurídico-administrativos</h2>
        <p>O espanhol jurídico e administrativo tem características particulares: frases longas, subjuntivo de cortesia, locuções fixas e arcaísmos.</p>

        <h2>Características do español jurídico</h2>
        <table>
          <tr><th>Rasgo</th><th>Ejemplo</th></tr>
          <tr><td>Uso do futuro de subjuntivo</td><td><em>El que infringiere</em> esta norma... (arcaico)</td></tr>
          <tr><td>Nominalizações</td><td><em>La realización del acto</em> (em vez de "realizar el acto")</td></tr>
          <tr><td>Locuções prepositivas</td><td><em>en virtud de, a tenor de, con arreglo a</em></td></tr>
          <tr><td>Voz passiva abundante</td><td><em>Será sancionado con...</em></td></tr>
          <tr><td>Impersonalidade</td><td><em>Se entiende que... / Procede declarar...</em></td></tr>
        </table>

        <h2>Vocabulário jurídico-administrativo</h2>
        <table>
          <tr><th>Término</th><th>Significado</th></tr>
          <tr><td>el recurso</td><td>o recurso (judicial)</td></tr>
          <tr><td>la sentencia</td><td>a sentença</td></tr>
          <tr><td>el fallo</td><td>o veredicto / a decisão</td></tr>
          <tr><td>la instancia</td><td>a instância</td></tr>
          <tr><td>el demandante / demandado</td><td>o autor / o réu</td></tr>
          <tr><td>la jurisprudencia</td><td>a jurisprudência</td></tr>
          <tr><td>el expediente</td><td>o processo / o dossiê</td></tr>
          <tr><td>el titular del derecho</td><td>o titular do direito</td></tr>
        </table>

        <div class="example-box">
          <em>En virtud de lo dispuesto</em> en el artículo 3 de la presente Ley, <em>se procede a</em> la notificación formal del acto administrativo impugnado, <em>a tenor de</em> lo establecido por la jurisprudencia vigente.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> O futuro de subjuntivo (<em>fuere, tuviere, hiciere</em>) é um arcaísmo que sobrevive exclusivamente em textos legais e fórmulas administrativas. Não se usa na fala cotidiana.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "A expressão 'en virtud de' equivale em português a:",
          options: ["apesar de", "em virtude de / com base em", "em vez de", "a propósito de"],
          answer: 1
        },
        {
          type: "tf",
          question: "O futuro de subjuntivo (fuere, tuviere) é muito comum na língua falada coloquial.",
          answer: false
        },
        {
          type: "fill",
          question: "No vocabulário jurídico, a 'decisão do juiz' se chama 'la ___'.",
          answer: "sentencia|fallo"
        }
      ]
    },
    {
      title: "Módulo 4 – Variación Lingüística Avanzada",
      content: `
        <h2>Tipos de variação linguística</h2>
        <p>A língua varia de acordo com o espaço geográfico, o tempo histórico, o grupo social e a situação comunicativa.</p>

        <h2>Variação diatópica (geográfica)</h2>
        <table>
          <tr><th>Fenómeno</th><th>Descripción</th><th>Zona</th></tr>
          <tr><td>Seseo</td><td>c/z pronunciadas como /s/</td><td>América Latina, Canarias, Andalucía</td></tr>
          <tr><td>Distinción</td><td>c/z = /θ/, s = /s/</td><td>Centro-norte España</td></tr>
          <tr><td>Voseo</td><td>"vos" en lugar de "tú"</td><td>Río de la Plata, Centroamérica</td></tr>
          <tr><td>Yeísmo</td><td>ll = y (misma pronunciación)</td><td>Casi todo el mundo hispano</td></tr>
          <tr><td>Aspiración de -s</td><td>/s/ final → /h/ o Ø</td><td>Caribe, Andalucía, Canarias</td></tr>
        </table>

        <h2>Variação diastrática (social)</h2>
        <table>
          <tr><th>Variedad</th><th>Características</th></tr>
          <tr><td>Sociolecto culto</td><td>Vocabulario amplio, sintaxis compleja, norma estándar</td></tr>
          <tr><td>Sociolecto popular</td><td>Simplificaciones, coloquialismos, préstamos</td></tr>
          <tr><td>Jerga juvenil</td><td>Neologismos, acortamientos, anglicismos</td></tr>
          <tr><td>Jerga profesional</td><td>Tecnicismos, acrónimos, vocabulario específico</td></tr>
        </table>

        <h2>Variação diafásica (situacional)</h2>
        <div class="example-box">
          La misma persona usa registros distintos según el contexto:<br>
          — Con el jefe: <em>"Le remito el informe adjunto para su consideración."</em><br>
          — Con el colega: <em>"Te mando el informe, échale un ojo."</em><br>
          — Con un amigo: <em>"Te mando el chisme, ya me dices."</em>
        </div>

        <div class="tip-box">
          Dica: <strong>Dica avançada:</strong> O <em>voseo</em> rioplatense conjuga diferente: <em>vos tenés, vos comés, vos vivís</em> — diferente do tuteo (<em>tú tienes, comes, vives</em>) e do voseo centroamericano.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "O 'seseo' consiste em:",
          options: [
            "Pronunciar ll e y da mesma forma",
            "Pronunciar c/z como /s/",
            "Aspirar o -s final",
            "Usar 'vos' em vez de 'tú'"
          ],
          answer: 1
        },
        {
          type: "tf",
          question: "O 'yeísmo' — pronunciar ll e y da mesma forma — ocorre apenas na América Latina.",
          answer: false
        },
        {
          type: "fill",
          question: "No voseo rioplatense, 'vos' + tener = 'vos ___'.",
          answer: "tenés"
        }
      ]
    },
    {
      title: "Módulo 5 – Análisis del Discurso",
      content: `
        <h2>O que é a análise do discurso?</h2>
        <p>É o estudo da língua em uso — não apenas frases isoladas, mas textos completos em seus contextos sociais, culturais e comunicativos.</p>

        <h2>Tipos de discurso</h2>
        <table>
          <tr><th>Tipo</th><th>Características</th><th>Ejemplo</th></tr>
          <tr><td>Narrativo</td><td>Sequência temporal, narrador, personagens</td><td>Novela, cuento, noticia</td></tr>
          <tr><td>Argumentativo</td><td>Tesis, argumentos, conclusión</td><td>Ensayo, editorial, debate</td></tr>
          <tr><td>Descriptivo</td><td>Características, estados, atributos</td><td>Retrato, guía turística</td></tr>
          <tr><td>Expositivo</td><td>Informar, explicar objetivamente</td><td>Artículo científico, manual</td></tr>
          <tr><td>Instructivo</td><td>Guiar acciones, imperativo</td><td>Receta, instrucciones</td></tr>
        </table>

        <h2>Coherencia y cohesión</h2>
        <table>
          <tr><th>Concepto</th><th>Definición</th><th>Recursos</th></tr>
          <tr><td>Cohesión</td><td>Mecanismos formales que unen el texto</td><td>Pronombres, conectores, elipsis, repetición</td></tr>
          <tr><td>Coherencia</td><td>Unidad temática y lógica del texto</td><td>Tema global, progresión temática, no contradicción</td></tr>
        </table>

        <h2>La deixis</h2>
        <div class="example-box">
          La <strong>deixis</strong> son las expresiones que solo se entienden en contexto:<br>
          <em>Personal:</em> yo, tú, él (dependen de quién habla)<br>
          <em>Espacial:</em> aquí, allí, este, ese, aquel<br>
          <em>Temporal:</em> ahora, ayer, entonces, hoy<br><br>
          Sin contexto, <em>"Él lo hizo aquí ayer"</em> no comunica nada preciso.
        </div>

        <div class="tip-box">
          Dica: <strong>Conceito clave:</strong> La <em>implicatura</em> (Grice) — lo que se comunica sin decirse explícitamente. Si alguien dice <em>"hace calor aquí"</em>, puede estar implicando <em>"abre la ventana"</em>.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Qual tipo de discurso tem como objetivo informar objetivamente?",
          options: ["Narrativo", "Argumentativo", "Expositivo", "Instructivo"],
          answer: 2
        },
        {
          type: "tf",
          question: "A coesão textual se refere à unidade temática e lógica do texto.",
          answer: false
        },
        {
          type: "fill",
          question: "As expressões que só se entendem em contexto (eu, aqui, agora) chamam-se '___'.",
          answer: "deixis"
        }
      ]
    },
    {
      title: "Módulo 6 – El Español en los Medios",
      content: `
        <h2>El lenguaje periodístico</h2>
        <p>O espanhol jornalístico tem características próprias que o distinguem de outros registros: clareza, objetividade, economia de palavras e estruturas específicas.</p>

        <h2>Estructura de la noticia</h2>
        <table>
          <tr><th>Parte</th><th>Función</th></tr>
          <tr><td>El titular</td><td>Resumir en pocas palabras, atraer atención</td></tr>
          <tr><td>El subtítulo</td><td>Ampliar el titular, dar contexto</td></tr>
          <tr><td>La entradilla (lead)</td><td>Las 5 W: qué, quién, cuándo, dónde, por qué</td></tr>
          <tr><td>El cuerpo</td><td>Desarrollo, contexto, declaraciones, datos</td></tr>
          <tr><td>El cierre</td><td>Perspectiva futura, conclusión</td></tr>
        </table>

        <h2>Recursos del lenguaje periodístico</h2>
        <table>
          <tr><th>Recurso</th><th>Ejemplo</th></tr>
          <tr><td>Titular nominalizador</td><td><em>"Subida histórica del IPC en octubre"</em></td></tr>
          <tr><td>Presente histórico</td><td><em>"El Congreso aprueba ayer la nueva ley"</em></td></tr>
          <tr><td>Comillas de distancia</td><td><em>El "plan de paz" fracasa en la cumbre</em></td></tr>
          <tr><td>Eufemismo institucional</td><td><em>ajuste laboral</em> (= despidos masivos)</td></tr>
          <tr><td>Verbo de lengua + declaración</td><td><em>El ministro afirmó que… / negó haber…</em></td></tr>
        </table>

        <h2>Medios digitales y nuevas narrativas</h2>
        <div class="example-box">
          El periodismo digital ha transformado la escritura: titulares SEO, contenido multimedia, hipertexto e interactividad con el lector.<br><br>
          Los <em>clickbaits</em> (cebos de clics) y las <em>fake news</em> (noticias falsas) son fenómenos que requieren <strong>alfabetización mediática</strong> — la capacidad crítica de evaluar fuentes.
        </div>

        <div class="tip-box">
          Dica: <strong>Dica:</strong> Para un C2 auténtico, lee editoriales de calidad: <em>El País</em>, <em>El Mundo</em>, <em>La Nación</em> (Argentina), <em>El Universal</em> (México). Analiza cómo construyen la argumentación y el tono.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "La 'entradilla' o 'lead' de una noticia responde a:",
          options: ["Solo quién y qué", "Las 5W: qué, quién, cuándo, dónde, por qué", "El titular y el subtítulo", "La conclusión del artículo"],
          answer: 1
        },
        {
          type: "tf",
          question: "El uso de comillas en titulares periodísticos puede indicar distancia o ironía.",
          answer: true
        },
        {
          type: "fill",
          question: "La capacidad crítica de evaluar fuentes mediáticas se llama 'alfabetización ___'.",
          answer: "mediática"
        }
      ]
    },
    {
      title: "Módulo 7 – Lenguas en Contacto y Bilingüismo",
      content: `
        <h2>El contacto de lenguas</h2>
        <p>O espanhol convive com centenas de línguas no mundo. Esse contato gera fenômenos linguísticos fascinantes.</p>

        <h2>Fenômenos de contato linguístico</h2>
        <table>
          <tr><th>Fenómeno</th><th>Definición</th><th>Ejemplo</th></tr>
          <tr><td>El préstamo</td><td>Palavra tomada de outra língua</td><td><em>fútbol</em> (inglês football)</td></tr>
          <tr><td>El calco</td><td>Tradução literal estrutural</td><td><em>rascacielos</em> (skyscraper)</td></tr>
          <tr><td>El code-switching</td><td>Alternar línguas na conversa</td><td><em>"Voy al market a comprar groceries"</em></td></tr>
          <tr><td>El spanglish</td><td>Mistura espanhol-inglês</td><td><em>"Voy a llamarte para atrás"</em> (call back)</td></tr>
          <tr><td>La interferencia</td><td>Erro por influência da L1</td><td>Falso cognato, transferência</td></tr>
          <tr><td>La convergencia</td><td>Línguas se tornam mais similares</td><td>Espanhol paraguaio com influência guaraní</td></tr>
        </table>

        <h2>El español en EE.UU.</h2>
        <div class="example-box">
          Con más de 40 millones de hablantes nativos, EE.UU. es el segundo país con más hispanohablantes del mundo.<br><br>
          El <em>spanglish</em> es una variedad híbrida natural, producto del bilingüismo y no una "corrupción" del idioma. Lingüistas como Ana Celia Zentella lo estudian como sistema coherente.
        </div>

        <h2>Español y lenguas indígenas hoy</h2>
        <table>
          <tr><th>País</th><th>Lenguas cooficiales</th></tr>
          <tr><td>Bolivia</td><td>36 lenguas (quechua, aymara...)</td></tr>
          <tr><td>Paraguay</td><td>Guaraní (70% lo habla)</td></tr>
          <tr><td>Perú</td><td>Quechua y aymara</td></tr>
          <tr><td>México</td><td>68 lenguas nacionales reconocidas</td></tr>
        </table>

        <div class="tip-box">
          Dica: <strong>Reflexión:</strong> El bilingüismo no divide la mente — la enriquece. Estudios neurocientíficos muestran que los bilingües tienen mayor flexibilidad cognitiva y resisten mejor el deterioro cognitivo en la vejez.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "'Rascacielos' (de 'skyscraper') es un ejemplo de:",
          options: ["préstamo", "calco", "code-switching", "interferencia"],
          answer: 1
        },
        {
          type: "tf",
          question: "O Paraguai tem o guaraní como língua cooficial junto ao espanhol.",
          answer: true
        },
        {
          type: "fill",
          question: "O fenômeno de alternar duas línguas na mesma conversa chama-se 'code-___'.",
          answer: "switching"
        }
      ]
    },
    {
      title: "Módulo 8 – Historia de la Lengua Española",
      content: `
        <h2>Origens e evolução do espanhol</h2>
        <p>O espanhol é uma língua românica descendente do latim vulgar. Sua história reflete séculos de conquistas, migrações e intercâmbios culturais.</p>

        <h2>Etapas históricas</h2>
        <table>
          <tr><th>Período</th><th>Hecho relevante</th></tr>
          <tr><td>Até séc. III d.C.</td><td>Romanização da Península Ibérica; latim vulgar</td></tr>
          <tr><td>Séc. V–VIII</td><td>Invasões germânicas; visigodos; influência gótica</td></tr>
          <tr><td>Séc. VIII–XV</td><td>Dominação árabe (Al-Ándalus); ~4.000 arabismos</td></tr>
          <tr><td>Séc. X–XIII</td><td>Primeiros textos em romance: <em>Glosas Emilianenses</em></td></tr>
          <tr><td>Séc. XIII</td><td>Alfonso X el Sabio — espanhol como língua culta</td></tr>
          <tr><td>1492</td><td>Gramática de Nebrija — 1ª gramática de uma língua romance</td></tr>
          <tr><td>Séc. XVI–XVII</td><td>Siglo de Oro — Cervantes, Lope, Quevedo, Góngora</td></tr>
          <tr><td>1713</td><td>Fundação da Real Academia Española (RAE)</td></tr>
          <tr><td>Séc. XIX</td><td>Independências latino-americanas; diversificação</td></tr>
        </table>

        <h2>Legado árabe no espanhol</h2>
        <div class="example-box">
          Palavras de origem árabe (arabismos):<br>
          <em>aceite, arroz, azúcar, álgebra, algoritmo, almohada, alcalde, ajedrez, ojalá, hasta</em><br><br>
          O prefixo <em>al-</em> (o artigo definido árabe) aparece em centenas de palavras espanholas.
        </div>

        <div class="tip-box">
          Dica: <strong>Curiosidade:</strong> A palavra <em>ojalá</em> vem do árabe <em>law šá lláh</em> (oxalá Deus queira). É uma das palavras mais usadas no espanhol e revela 800 anos de presença árabe na Península!
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "Quem escreveu a primeira gramática de uma língua romance em 1492?",
          options: ["Cervantes", "Alfonso X", "Antonio de Nebrija", "Lope de Vega"],
          answer: 2
        },
        {
          type: "tf",
          question: "A palavra 'ojalá' tem origem árabe.",
          answer: true
        },
        {
          type: "fill",
          question: "O prefixo árabe ___ aparece em palavras como 'alcalde', 'aceite' e 'almohada'.",
          answer: "al-|al"
        }
      ]
    },
    {
      title: "Módulo 9 – La Escritura Creativa",
      content: `
        <h2>A escrita criativa em espanhol</h2>
        <p>No C2, não basta compreender textos literários — é preciso ser capaz de produzir textos com recursos estilísticos, voz própria e domínio da língua.</p>

        <h2>El microrrelato (flash fiction)</h2>
        <p>Gênero breve, máximo precisão expressiva. O microrrelato hispano tem grande tradição:</p>
        <div class="example-box">
          <strong>El dinosaurio</strong> — Augusto Monterroso (Guatemala, 1959)<br>
          <em>"Cuando despertó, el dinosaurio todavía estaba allí."</em><br>
          (considerado uno de los cuentos más cortos del mundo)
        </div>

        <h2>Técnicas de escritura creativa</h2>
        <table>
          <tr><th>Técnica</th><th>Descripción</th></tr>
          <tr><td>El narrador no fiable</td><td>El narrador engaña al lector (conscientemente o no)</td></tr>
          <tr><td>In medias res</td><td>Comenzar la historia en medio de la acción</td></tr>
          <tr><td>El monólogo interior</td><td>Flujo de conciencia del personaje</td></tr>
          <tr><td>La elipsis narrativa</td><td>Omitir partes del relato — el lector las infiere</td></tr>
          <tr><td>El punto de vista</td><td>1ª, 2ª o 3ª persona, omnisciente o limitada</td></tr>
          <tr><td>El símbolo</td><td>Objeto o elemento con significado más profundo</td></tr>
        </table>

        <h2>Pasos para escribir un buen texto</h2>
        <div class="example-box">
          1. <strong>Planifica</strong> antes de escribir: tema, estructura, punto de vista.<br>
          2. <strong>Escribe</strong> sin autocensura en el primer borrador.<br>
          3. <strong>Revisa</strong> la cohesión, coherencia y estilo.<br>
          4. <strong>Edita</strong>: elimina lo superfluo, potencia lo esencial.<br>
          5. <strong>Lee en voz alta</strong>: el oído detecta lo que el ojo no ve.
        </div>

        <div class="tip-box">
          Dica: <strong>Ejercicio C2:</strong> Escribe un microrrelato de máximo 100 palabras con un giro final inesperado. Usa al menos una metáfora y varía la longitud de las frases conscientemente.
        </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "La técnica narrativa 'in medias res' consiste en:",
          options: [
            "Terminar la historia de forma inesperada",
            "Comenzar la historia en medio de la acción",
            "Narrar desde el punto de vista de varios personajes",
            "Omitir el final de la historia"
          ],
          answer: 1
        },
        {
          type: "tf",
          question: "El microrrelato de Monterroso 'El dinosaurio' tiene exactamente una frase.",
          answer: true
        },
        {
          type: "fill",
          question: "Un narrador que engaña al lector (conscientemente o no) se llama narrador 'no ___'.",
          answer: "fiable"
        }
      ]
    },
    {
      title: "Módulo 10 – Recapitulação C2: Maestría del Español",
      content: `
        <h2> ¡Felicidades! Has completado el curso completo de español A1–C2!</h2>
        <p>Chegaste ao <strong>nível C2 — Maestría</strong>. Este é o nível mais alto do MCER (Marco Común Europeo de Referencia para las Lenguas). Você é capaz de:</p>

        <h2>Competências do falante C2</h2>
        <table>
          <tr><th>Habilidad</th><th>Descripción</th></tr>
          <tr><td>Comprensión oral</td><td>Entender cualquier tipo de lengua hablada, incluso a alta velocidad</td></tr>
          <tr><td>Comprensión lectora</td><td>Leer con facilidad cualquier tipo de texto, incluido el abstracto</td></tr>
          <tr><td>Expresión oral</td><td>Expresarse espontáneamente con gran fluidez y precisión</td></tr>
          <tr><td>Expresión escrita</td><td>Escribir textos claros, fluidos y estilísticamente apropiados</td></tr>
          <tr><td>Interacción</td><td>Participar en cualquier conversación o debate con facilidad y naturalidad</td></tr>
        </table>

        <h2>Todo lo que has aprendido</h2>
        <div class="example-box">
          - <strong>A1:</strong> Bases — alfabeto, saludos, familia, números, ciudad<br>
          - <strong>A2:</strong> Pasado, futuro, viajes, salud, trabajo, cultura<br>
          - <strong>B1:</strong> Perfecto, subjuntivo, imperativo, medio ambiente, tecnología<br>
          - <strong>B2:</strong> Subjuntivo imperfecto, condicionales, voz pasiva, debate<br>
          - <strong>C1:</strong> Maestría gramatical, registros, textos académicos, cultura avanzada<br>
          - <strong>C2:</strong> Análisis del discurso, estilística, historia de la lengua, escritura creativa
        </div>

        <h2>¿Y ahora qué?</h2>
        <div class="example-box">
           Lee literatura original — Borges, García Márquez, Almudena Grandes<br>
           Ve películas y series sin subtítulos — <em>La Casa de Papel, Narcos, Amores Perros</em><br>
           Escribe: diarios, cuentos, artículos de opinión<br>
           Habla con nativos de diferentes países<br>
           Lee prensa de calidad diariamente<br>
           Considera el examen oficial DELE C2 o SIELE
        </div>

        <div class="tip-box">
          Dica: <strong>Mensaje final:</strong> Aprender una lengua es un viaje sin fin — siempre hay algo nuevo que descubrir. El español te abre las puertas a 500 millones de personas y a una de las culturas más ricas y diversas del planeta. ¡Enhorabuena y a seguir!         </div>
      `,
      exercises: [
        {
          type: "mc",
          question: "O que é o DELE C2?",
          options: [
            "Um curso online de espanhol",
            "Um exame oficial de certificação de espanhol nível maestría",
            "Um método de aprendizagem rápida",
            "Uma variedade do espanhol falado na Argentina"
          ],
          answer: 1
        },
        {
          type: "tf",
          question: "O C2 é o nível mais alto no Marco Común Europeo de Referencia para las Lenguas.",
          answer: true
        },
        {
          type: "fill",
          question: "Complete: '¡___ y a seguir aprendiendo!' (Parabéns)",
          answer: "Enhorabuena|Felicidades"
        }
      ]
    }
  ]
};
