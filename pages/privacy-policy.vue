<template>
  <div class="privacy-policy">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <h1 class="text-2xl font-bold mb-6">Privacy Policy</h1>

      <div class="prose prose-sm sm:prose lg:prose-lg mx-auto">
        <div class="mb-6">
          <p class="mb-4">Dear User,</p>
          <p class="mb-4">Welcome to the TikGrabber app! We take your privacy very seriously and want you to feel confident in your interactions with our app. Please read this privacy policy carefully to understand how we collect, use, and protect your personal information.</p>
        </div>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">I. Information Collection</h2>
          <ol class="list-decimal pl-6 space-y-2">
            <li>We may collect information that you voluntarily provide to us when using the app, such as your name and email address.</li>
            <li>We may also automatically collect non-personal identification information, such as your device model, operating system version, and IP address, through the use of cookies and other technologies.</li>
          </ol>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">II. Purpose of Use</h2>
          <p class="mb-2">We will use your personal information for the following purposes:</p>
          <ol class="list-decimal pl-6 space-y-2">
            <li>Providing and improving our app and services.</li>
            <li>Processing your requests and complaints.</li>
            <li>Sending you information related to our products and services.</li>
          </ol>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">III. Sharing of Information</h2>
          <p class="mb-2">We will not sell, rent, or exchange your personal information with third parties. However, we may share your personal information with third parties in the following situations:</p>
          <ol class="list-decimal pl-6 space-y-2">
            <li>When necessary to comply with legal requirements or execute court orders.</li>
            <li>When necessary to protect our or others' legitimate interests.</li>
          </ol>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">IV. Storage of Information</h2>
          <p>We will take reasonable measures to safeguard the confidentiality and integrity of your personal information. We will store your personal information securely and prevent unauthorized access, use, disclosure, modification, or destruction.</p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">V. Protection of Minors' Privacy</h2>
          <p>We take the privacy of minors very seriously. If you are under 18 years old, please use our app under the supervision of your parents or guardians.</p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">VI. Updates to the Privacy Policy</h2>
          <p>We reserve the right to update this privacy policy at any time. If we make material changes to the privacy policy, we will notify you in a timely manner.</p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">VII. Contact Us</h2>
          <p>If you have any questions or suggestions about this privacy policy, please contact us at cy@wyld.cc.</p>
        </section>

        <div class="mt-8">
          <p class="mb-2">Thank you for your support!</p>
          <p class="mb-2">Best regards,</p>
          <p>TikGrabber Team</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy - TikGrabber',
  meta: [
    { name: 'description', content: 'TikGrabber privacy policy and terms of service' }
  ]
})
</script>

<style scoped>
.privacy-policy {
  line-height: 1.6;
}
</style>
