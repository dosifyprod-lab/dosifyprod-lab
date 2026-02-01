<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          v-model="formData.name"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          v-model="formData.email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          v-model="formData.message"
          required
          rows="5"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? "Sending..." : "Send Message" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      },
      isSubmitting: false
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "YOUR_ACCESS_KEY_HERE",
            ...this.formData
          }),
        });

        const result = await response.json();
        if (result.success) {
          alert("Message sent successfully!");
          this.formData = { name: "", email: "", message: "" };
        } else {
          alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>