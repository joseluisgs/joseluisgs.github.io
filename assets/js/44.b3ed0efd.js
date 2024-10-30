(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{632:function(a,s,e){"use strict";e.r(s);var n=e(15),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Si hay algo de lo que he disfrutado desde hace mucho tiempo es del uso de las Corrutinas en Kotlin. Este año he decidido explotar su uso en el backend y no puedo estar más satisfecho: rapidez, sencillez y nuevas filosofías de programación fácilmente aplicables sin recurrir a otros recursos.")]),a._v(" "),e("h2",{attrs:{id:"corrutinas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#corrutinas"}},[a._v("#")]),a._v(" Corrutinas")]),a._v(" "),e("p",[a._v("Una "),e("a",{attrs:{href:"https://kotlinlang.org/docs/coroutines-overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("corrutina"),e("OutboundLink")],1),a._v(" es un hilo de ejecución ligero que nos permite ejecutar código de forma asíncrona. De hecho su nombre viene de "),e("em",[a._v("rutina concurrente")]),a._v(". En Kotlin, las corrutinas son una forma de programación asíncrona/concurrente que nos permite simplificar el código para que se vea y se escriba como si fuese secuencial.")]),a._v(" "),e("p",[a._v("No voy a entrar en detalles de cómo funcionan las corrutinas, ya que hay muchos artículos que lo explican muy bien: documentación de "),e("a",{attrs:{href:"https://kotlinlang.org/docs/coroutines-overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kotlin"),e("OutboundLink")],1),a._v(" o "),e("a",{attrs:{href:"https://www.baeldung.com/kotlin/coroutines",target:"_blank",rel:"noopener noreferrer"}},[a._v("Baeldung"),e("OutboundLink")],1),a._v(". Tampoco voy a explicar cómo funcionan o "),e("a",{attrs:{href:"https://www.amazon.com/Kotlin-Coroutines-Tutorials-Second-Mastering/dp/1942878958",target:"_blank",rel:"noopener noreferrer"}},[a._v("se han implementado"),e("OutboundLink")],1),a._v(", porque no es es este el objetivo. En este artículo voy a hablar de cómo las corrutinas nos pueden ayudar a simplificar el código asíncrono y concurrente y qué me han ofrecido a nivel docente en mis módulos.")]),a._v(" "),e("p",[a._v("Pero entro  a describir sus características más importantes:")]),a._v(" "),e("ul",[e("li",[a._v("Ligereza: Puedes ejecutar muchas corrutinas en un solo subproceso debido a la compatibilidad con la suspensión, que no bloquea el subproceso en el que se ejecuta la corrutina. La suspensión ahorra más memoria que el bloqueo y admite muchas operaciones simultáneas.")]),a._v(" "),e("li",[a._v("Menos fugas de memoria: Usa la simultaneidad estructurada para ejecutar operaciones dentro de un alcance.")]),a._v(" "),e("li",[a._v("Compatibilidad con cancelación incorporada: Se propaga automáticamente la cancelación a través de la jerarquía de corrutinas en ejecución.")])]),a._v(" "),e("h2",{attrs:{id:"funciones-de-suspension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#funciones-de-suspension"}},[a._v("#")]),a._v(" Funciones de suspensión")]),a._v(" "),e("p",[a._v("una "),e("strong",[a._v("función de suspensión")]),a._v(" e sun concepto clave que da forma a la filosofía de la scorrutinas. Una función de suspensión, es una función que puede pausar su ejecución. Cuando una función de suspensión se suspende, la corrutina que la ejecuta se suspende y se puede reanudar en algún momento en el futuro. Las funciones de suspensión se marcan con la palabra clave suspend. ¿Qué significa todo esto? Cuando trabajamos con hilos, estos hilos tienen a bloquearse sobre todo al realizar operaciones de entrada y salida. Una corrutina está asociado a un hilo, pero no bloquea el hilo, sino que suspende la corrutina. Esto nos permite ejecutar muchas corrutinas en un solo hilo. Es decir, cuando una corrutina se suspende libera su hilo que puede ser utilizado por otra corrutina, cuando se reanuda la corrutina, el hilo se vuelve a ocupar, y no tiene por que ser el mismo hilo que estaba ocupado antes. Lo que ha hecho el equipo de Kotlin, es crear un hilo de ejecución ligero que se puede suspender y reanudar sobre los hilos existentes utilizando ideas de programación asíncrona y concurrente conocidas como: callbacks, promesas, futures, pools, etc y mapeando los hilos ofrecidos por la JVM y el sistema para que se puedan utilizar de forma eficiente.")]),a._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{"border-radius":"0.25rem"},attrs:{loading:"lazy",src:"https://doordash.engineering/wp-content/uploads/2021/11/coroutine-11-1-1024x484.jpg",alt:"Imagen"}})]),a._v(" "),e("p",[a._v('Recuerda que los hilos son "caros", pues están limitados por el número de núcleos de CPU y lo que te posibilite el sistema operativo. Todos tus servicios "compiten" por ellos. Gracias a las corrutinas, podemos aprovechar aprovechar mucho más los recursos en backend al no ocupar tantos hilos. De hecho en una prueba de clase probamos a lanzar 13.000 hilos, el máximo soportado por el sistema operativo de clase (Linux) y llegamos a más de 1.500.000 de corrutinas sin tener problemas realizando la misma operación. Esto ya es una ventaja considerable, aunque el valor depende de las operaciones a realizar.')]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[a._v('Este año hemos aprendido lo que realmente significa bloquear ⛔, a valorar los recursos compartidos, operaciones de entrada y salida, y comprender la importancia del cambio de contexto y que los recursos no son infinitos. Bienvenidos/as al mundo de la suspensión ✅.\nComo broma, te diré que nunca "suspender" ha tenido un significado tan positivo en clase 😅.')])]),e("h2",{attrs:{id:"concurrencia-estructurada"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concurrencia-estructurada"}},[a._v("#")]),a._v(" Concurrencia estructurada")]),a._v(" "),e("p",[a._v("Las corrutinas se mueven dentro de un alcance o "),e("a",{attrs:{href:"https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency",target:"_blank",rel:"noopener noreferrer"}},[a._v("scope"),e("OutboundLink")],1),a._v('. Cuando una corrutina se cancela, se cancelan todas las corrutinas que se están ejecutando en el mismo alcance que la corrutina que se cancela. Siempre suelo poner la imagen de unas muñecas Matrioska. Esto se conoce como concurrencia estructurada, evitando fugas de memoria, o que se queden elementos "zombies" en el sistema, todo un plus para el alumnado que ve que no crea fugas de memoria.')]),a._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{"border-radius":"0.25rem"},attrs:{loading:"lazy",src:"https://blendup.art/wp-content/uploads/2019/07/significado_tatuagem_matrioska_1-1024x576.jpg",alt:"Imagen"}})]),a._v(" "),e("h2",{attrs:{id:"mecanismos-de-sincronizacion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mecanismos-de-sincronizacion"}},[a._v("#")]),a._v(" Mecanismos de sincronización")]),a._v(" "),e("p",[a._v("Las corrutinas se pueden sincronizar de forma segura utilizando los mecanismos de sincronización de Kotlin. Esto nos permite sincronizar corrutinas de forma segura: tenemos los "),e("a",{attrs:{href:"https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-semaphore/",target:"_blank",rel:"noopener noreferrer"}},[a._v("semáforos"),e("OutboundLink")],1),a._v(" y "),e("a",{attrs:{href:"https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-mutex/",target:"_blank",rel:"noopener noreferrer"}},[a._v("cerrojos"),e("OutboundLink")],1),a._v(" y otros elementos como canales. Por lo tanto podemos trabajar con ellas de una manera similar a como lo hemos hecho con los hilos protegiendo nuestras secciones críticas.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[a._v("Mecanismos de sincronización específicos, muy similares a los que conoces en hilos, de hecho puedes incluso montarte monitores. Otra cosa es que los necesites. Ya lo verás.")])]),e("h2",{attrs:{id:"async-y-await"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-y-await"}},[a._v("#")]),a._v(" Async y await")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://kotlinlang.org/docs/composing-suspending-functions.html#concurrent-using-async",target:"_blank",rel:"noopener noreferrer"}},[a._v("Async y await"),e("OutboundLink")],1),a._v(" son dos palabras clave que nos permiten trabajar con corrutinas de forma asíncrona como si fuera secuencial ❤️. Async nos permite crear una corrutina que se ejecuta de forma asíncrona y await nos permite esperar a que se complete la corrutina. Esto nos permite trabajar con corrutinas de forma asíncrona, pero sin tener que lidiar con callbacks, promesas, etc. De hecho podemos incurso incorporar timeouts, etc. En el siguiente ejemplo podemos ver como se trabaja con async y await y lanzar varias peticiones concurrentes, y nos suspendemos para esperar sus resultado, si este no ha llegado:")]),a._v(" "),e("div",{staticClass:"language-kotlin line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-kotlin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fun")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" runBlocking "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" time "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" measureTimeMillis "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" one "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" async "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("doSomethingUsefulOne")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" two "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" async "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("doSomethingUsefulTwo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The answer is ')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("one"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("await")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" two"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("await")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Completed in ')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("$")]),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("time")])]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v(' ms"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[a._v("Sinceramente Async/Await ha sido un gran avance respecto al uso de Future/FutureCallable por su sencilles de implementación en clase. de hecho el uso de Timeouts es una gran ventaja ✅.")])]),e("h2",{attrs:{id:"dispatchers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dispatchers"}},[a._v("#")]),a._v(" Dispatchers")]),a._v(" "),e("p",[a._v("Los "),e("a",{attrs:{href:"https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("dispatchers"),e("OutboundLink")],1),a._v(" son los encargados de ejecutar las corrutinas en un contexto. Por defecto, las corrutinas se ejecutan en el hilo que las lanza. Pero podemos cambiar el contexto y con ello el conjuntos de hilos en el que se ejecutan las corrutinas utilizando los dispatchers. De esta manera podemos asignar nuestro código asíncrono a un conjunto de workers o pool de hilos que se encargan de ejecutar las corrutinas optimizados para determinadas tareas/operaciones. Esto nos permite ejecutar corrutinas en hilos diferentes, y de esta manera aprovechar los recursos de forma eficiente. En el siguiente ejemplo podemos ver como se trabaja con dispatchers:")]),a._v(" "),e("div",{staticClass:"language-kotlin line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-kotlin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fun")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" runBlocking "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" one "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("async")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Dispatchers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("IO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// eficiente en operaciones I/O")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"I'm working in thread ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Thread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name")]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" two "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("async")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Dispatchers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// en el dispacher por defecto")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"I'm working in thread ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Thread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name")]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n     "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The answer is ')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("one"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("await")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" two"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("await")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("p",[a._v("Existen distintos tipos de "),e("a",{attrs:{href:"https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#dispatchers-and-threads",target:"_blank",rel:"noopener noreferrer"}},[a._v("Dispacher"),e("OutboundLink")],1),a._v(" pre-establecidos, pero te recomiendo para el back usar IO (operaciones de entrada y salida), Default (para operaciones intensivas) o crearte tu propio hilo para ello.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[a._v("El uso de Dispachers simplifica mucho cómo y de qué manera vas a trabajar con los recursos. De hecho, gracias a ellos el alumnado ha aprendido a analizar sus tipos de operaciones, características para decidir cuál es el idóneo ✅.")])]),e("h2",{attrs:{id:"canales"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canales"}},[a._v("#")]),a._v(" Canales")]),a._v(" "),e("p",[a._v("Si hay algo que me parece simple de usar para realizar coordinación y sincronización son los "),e("a",{attrs:{href:"https://kotlinlang.org/docs/channels.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("canales"),e("OutboundLink")],1),a._v(". Similares a una Blockin Queue, pero con la ventaja de no bloquear, si no que se suspenden, siendo "),e("a",{attrs:{href:"https://kt.academy/article/cc-hot-cold",target:"_blank",rel:"noopener noreferrer"}},[a._v("Hot Streams"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{"border-radius":"0.25rem"},attrs:{loading:"lazy",src:"https://miro.medium.com/max/786/1*0wWtCaRrUZ1DaYM8j25i3Q.webp",alt:"Imagen"}})]),a._v(" "),e("p",[a._v("Además, se pueden configurar de distinta manera para que su comportamiento sea el más adecuado para nuestro caso de uso. Con ellos podemos crear productores y consumidores de información gracias a sus interfaces de SendChannel y ReceiveChannel, aplicar pipelines de procesamiento de datos, fan-in, fan-out, o bradcasting, etc.")]),a._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{"border-radius":"0.25rem"},attrs:{loading:"lazy",src:"https://jivimberg.io/images/posts/2019-04-18/Channels.gif",alt:"Imagen"}})]),a._v(" "),e("p",[a._v("En el siguiente ejemplo podemos ver como se trabaja con canales:")]),a._v(" "),e("div",{staticClass:"language-kotlin line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-kotlin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fun")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" runBlocking "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" channel "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Int"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    \n    launch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("..")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" channel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        channel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    launch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" channel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n        "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[a._v("Los canales son una gran herramienta para coordinar y sincronizar tareas 👮. De hecho, gracias a ellos el alumnado ha aprendido a analizar sus tipos de operaciones, sincronizarlas, aprender a combinarlos sabiendo sus características ahorrando tiempo en creación de monitores o similares ✅.")])]),e("h2",{attrs:{id:"flujos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flujos"}},[a._v("#")]),a._v(" Flujos")]),a._v(" "),e("p",[a._v("Pero sin duda, una de las cosas que me tiene enganchado son los flujos 👨🏻‍💻. Los "),e("a",{attrs:{href:"https://kotlinlang.org/docs/flow.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Flows"),e("OutboundLink")],1),a._v(" de Kotlin son una secuencia de valores que se emiten de forma asíncrona, son "),e("a",{attrs:{href:"https://kt.academy/article/cc-hot-cold",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cold Streams"),e("OutboundLink")],1),a._v(". Son similares a los observables de Rx (RxJs, RxJava), pero con la ventaja de que no son tan complejos de usar. Además, gracias a ello podemos realizar operaciones de transformación, filtrado, mapeo, etc. de forma muy sencilla y siguiendo una api similar a las de las colecciones y secuencias.")]),a._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{"border-radius":"0.25rem"},attrs:{loading:"lazy",src:"https://developer.android.com/static/images/kotlin/flow/flow-entities.png",alt:"Imagen"}})]),a._v(" "),e("p",[a._v("El uso de Flows es muy realmente simple, solo tenemos que crear una función que retorne un Flow y con ello se nos abre un mundo de posibilidades. El primero de ellos es la programación reactiva. Ya que podemos conectarnos a una base de datos y emitir los datos que se van actualizando en tiempo real. Otro de sus usos es tener un stream de datos que se actualiza en tiempo real, como por ejemplo, un stream de datos de un sensor. Pero uno de los más interesantes, es la posibilidad de tener un "),e("a",{attrs:{href:"https://developer.android.com/kotlin/flow/stateflow-and-sharedflow",target:"_blank",rel:"noopener noreferrer"}},[a._v("estado"),e("OutboundLink")],1),a._v(" "),e("a",{attrs:{href:"https://www.kodeco.com/22030171-reactive-streams-on-kotlin-sharedflow-and-stateflow",target:"_blank",rel:"noopener noreferrer"}},[a._v("compartido y reactivo"),e("OutboundLink")],1),a._v(". De hecho su facilidad para acercarnos a la reactividad y estados compartidos, es lo que más uso le hemos dado en para hacer servicios reactivos que acceden a datos.")]),a._v(" "),e("div",{staticClass:"language-kotlin line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-kotlin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fun")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" runBlocking "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" flow "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" flow "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("..")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("delay")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("emit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    launch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        flow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("collect")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" value "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[a._v("Los flujos han abierto la puerta a que apliquemos otras formas de programación, como la reactiva, y nos han permitido crear servicios reactivos o estados compartidos de una forma simple y sin recurrir a recursos externos ✅.")])]),e("h2",{attrs:{id:"otras-aplicaciones"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#otras-aplicaciones"}},[a._v("#")]),a._v(" Otras aplicaciones")]),a._v(" "),e("p",[a._v("No voy a entrar en otras aplicaciones con corrutinas, porque hay bastantes, ni de otros frameworks que hacen uso de ellas como "),e("a",{attrs:{href:"https://ktor.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ktor"),e("OutboundLink")],1),a._v(", o la programación de "),e("a",{attrs:{href:"https://ktor.io/docs/servers-raw-sockets.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sockets"),e("OutboundLink")],1),a._v(" no bloqueantes. Pero he disfrutado mucho haciendo un servicio de chat reactivo con una caché de mensajes compartida. De hecho montarlo ha supuesto muchas menos líneas de código y mucha menos complejidad que hacerlo con otras alternativas en Java.")]),a._v(" "),e("p",[a._v("De la misma manera se pueden aplicar con Spring para construir servicios reactivos ya sea con SQL o NoSQL con muy buenos resultados.")]),a._v(" "),e("h2",{attrs:{id:"conclusiones"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusiones"}},[a._v("#")]),a._v(" Conclusiones")]),a._v(" "),e("p",[a._v("Yo ya había trabajado con las corrutinas en desarrollo móvil, pero ha sido este año cuando he decidido dar el salto con ella en mis módulos de segundo de DAM como son Acceso a Datos y Programación de Servicios y Procesos. Creo que ha sido un gran acierto su incorporación en el Backend como complemento a los hilos y todo lo relacionado con ellos: Futures, monitores, semáforos, etc.")]),a._v(" "),e("p",[a._v("Sin duda, las corrutinas son una herramienta muy potente y que nos permite hacer código más limpio y mantenible y legible y nos abre las puertas a que fácilmente programemos siguiendo otras filosofías sin necesidad de instalar librerías externas pues nos ofrecen todo para ello.")]),a._v(" "),e("p",[a._v("Como he dicho, no es un artículo para explicarte cómo funcionan, pero sí para mostrarte sus ventajas a nivel docente y en el back. También te recomiendo que le eches un vistazo al blog de "),e("a",{attrs:{href:"https://elizarov.medium.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Roman Elizarov, Project Lead for the Kotlin Programming Language de JetBrains"),e("OutboundLink")],1),a._v(" donde comenta muchos aspectos interesantes de cómo está hecho Kotlin por dentro y las Corrutinas.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[e("span",{staticClass:"iconify",attrs:{"data-icon":"logos:kotlin-icon"}}),a._v(" Pon una corrutina en tu vida y verás como todo cambia")]),e("p",[a._v("Bienvenido/a al mundo de las suspensión, de la concurrencia y de la programación reactiva. Bienvenido/a al mundo de las corrutinas.")]),a._v(" "),e("p",[a._v("Puedes ver distintos ejemplos de su uso en los apuntes de mis módulos y prácticas disponibles en "),e("span",{staticClass:"iconify",attrs:{"data-icon":"mdi:github"}}),a._v(" "),e("a",{attrs:{href:"https://github.com/joseluisgs",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);