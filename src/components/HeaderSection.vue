<script lang="ts" setup></script>

<template>
  <header>
    <div class="flex-item-left">
      <nav>
        <img src="@images/designer-avatar.png" alt="Yanny's Avatar" />
        <ul>
          <li><a href="#works">Works</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="intro">
        <div class="ml-24">
          <h1>
            Hey, I’m <br />
            Yanny
          </h1>
          <p class="designation">UI & UX Designer</p>
          <div class="social-icons">
            <a href="#"><img src="@svg/behance.svg" alt="Behance logo" /></a>
            <a href="#"><img src="@svg/dribbble.svg" alt="Dribbble logo" /></a>
            <a href="#"><img src="@svg/linkedin.svg" alt="LinkedIn logo" /></a>
            <a href="#"
              ><img src="@svg/pinterest.svg" alt="Pinterest logo"
            /></a>
          </div>
        </div>
        <button href="#" class="hire-me-btn">Hire Me</button>
        <div class="social-media">
          <a href="#"><img src="@svg/facebook.svg" alt="Facebook logo" /></a>
          <a href="#"><img src="@svg/instagram.svg" alt="Instagram logo" /></a>
          <a href="#"><img src="@svg/twitter.svg" alt="Twitter logo" /></a>
        </div>
      </div>
      <div class="services">
        <div class="flex">
          <img src="@images/ilustrations-side.png" alt="background image" />
          <div class="ilustrations-container">
            <div class="overlay-container"></div>
            <h2>Illustrations</h2>
            <p>Illustration and Graphics</p>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="photography-container">
            <div class="overlay-container"></div>
            <h2>Photography</h2>
            <p>Art of Photography</p>
          </div>
          <img
            src="@images/photography-bottom.png"
            alt="background image"
            class="z-50"
          />
        </div>
      </div>
    </div>
    <div class="flex-item-righ">
      <div>
        <img src="@images/background-1.png" alt="background image" />
        <div class="ui-ux-design-container">
          <div class="overlay-container"></div>
          <h2>UI & UX Design</h2>
          <p>
            User Experience and <br />
            User Interface
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="logo-design-container">
          <div class="overlay-container"></div>
          <h2>Logo</h2>
          <p>Logo and Icons</p>
        </div>
        <img src="@images/logo-design-side.png" alt="background image" />
      </div>
    </div>
  </header>
</template>
