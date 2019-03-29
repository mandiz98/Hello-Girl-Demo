document.addEventListener("DOMContentLoaded", function(event) {
    const div = document.getElementById("kaboom")

    document.addEventListener("click", function(event) {
        const x = event.clientX
        const y = event.clientY

        const amount = 50
        const lifetime = 1000

        let particles = []
        for(let p = 0; p < amount; p++) {
            const particle = document.createElement("span")
            
            const size = randomSize()
            particle.style.width = size
            particle.style.height = size

            particle.style.backgroundColor = randomColor()

            particle.direction = randomDirection(x, y)
            
            particle.style.left = x + "px"
            particle.style.top = y + "px"

            setTimeout(function() {
                particle.style.left = particle.direction.x + "px"
                particle.style.top = particle.direction.y + "px"
            }, 1)

            particles.push(particle)
            div.appendChild(particle)
        }

        setTimeout(function(){
            for(const p of particles) {
                p.parentNode.removeChild(p)
            }
        }, lifetime)
    })

})
