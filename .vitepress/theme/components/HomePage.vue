<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { integrations } from '../../integrations'
import { teamMembers } from '../../contributors'
</script>

<template>
  <div class="content">
    <!-- <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <h2 id="integrations" op70 font-normal p="t-10 b-2">
            Integrations
          </h2>
          <div w-full p-10 class="integrations">
            <VPTeamMembers size="small" :members="integrations" />
          </div>
          <h2 id="meet-the-team" op70 font-normal p="t-10 b-2">
            Meet The Team
          </h2>
          <div w-full p-10>
            <VPTeamMembers size="medium" :members="teamMembers" />
          </div>
          <h2 id="sponsored-by" op70 font-normal pt-5 pb-2>
            Sponsored by
          </h2>
          <div grid="~ cols-1" w-full text-center mt-10>
            <div class="flex flex-col">
              <a text-lg mb-1em h="32px" href="https://github.com/sponsors/antfu" rel="noopener noreferrer">Anthony's Sponsors</a>
              <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg" target="_blank" rel="noopener noreferrer">
                <img
                  crossorigin="anonymous"
                  inline-block
                  width="768" height="1464"
                  class="resizable-img"
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg"
                  alt="Anthony Fu's sponsors"
                >
              </a>
            </div>
          </div>
          <p class="text-center opacity-75">
            <a href="https://www.netlify.com" rel="noopener noreferrer">
              <img src="/netlify.svg" alt="Deploys by Netlify" width="114" height="151">
            </a>
          </p>
        </div>
      </main>
    </div> -->
  </div>
</template>

<style>
.integrations .avatar {
  --vp-shadow-3: none;
}
.integrations .avatar .avatar-img {
  border-radius: unset;
  object-fit: unset;
}
</style>
