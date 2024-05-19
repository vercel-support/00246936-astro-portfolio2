import { component$, useSignal, $ } from '@builder.io/qwik'
import { SiLinkedin } from '@qwikest/icons/simpleicons'
import { HiBars3Solid } from '@qwikest/icons/heroicons'
import { SiGithub } from '@qwikest/icons/simpleicons'

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
    <div class="flex justify-between">
      <div className="flex flex-col justify-start">
        <div class="md:hidden">
          <button onClick$={toggleMenu}>
            <HiBars3Solid />
          </button>
        </div>
        <div class="text-xl font-semibold">
          {menuOpen.value && (
            <div>
              <ul class="space-y-4">
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
      </div>
      <div class="flex">
        <a href="https://github.com/mearleycf">
          <SiGithub class="mr-4" />
        </a>
        <a href="https://www.linkedin.com/in/fivestarnumberone/">
          <SiLinkedin />
        </a>
      </div>
    </div>
  )
})
