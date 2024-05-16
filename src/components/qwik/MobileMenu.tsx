import { component$, useSignal, $ } from '@builder.io/qwik'

export const MobileMenu = component$(() => {
  const menuOpen = useSignal(false)
  const toggleMenu = $(() => {
    menuOpen.value = !menuOpen.value
    let el = document.querySelector('button.hidden')
    if (el) {
      el.classList.toggle('hidden')
    }
  })

  return (
    <>
      <div class="md:hidden">
        <button onClick$={toggleMenu}>Menu</button>
      </div>
      <div>
        {menuOpen.value && (
          <div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
})
