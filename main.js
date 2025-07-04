 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/main.js b/main.js
index e2dc87e1f1dac60b4fd1242ba0f3468a7a5bbad9..1a7623e9e5b5817e572c32ab1c5244462118b05f 100644
--- a/main.js
+++ b/main.js
@@ -1,30 +1,31 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a//dev/null b/main.js
-index 0000000000000000000000000000000000000000..14ee5faa57cfae68c91837b2387059f8d95da235 100644
---- a//dev/null
-+++ b/main.js
-@@ -0,0 +1,21 @@
-+// Placeholder for future real-time price calculation and visualization
-+
-+document.addEventListener('DOMContentLoaded', () => {
-+  const form = document.getElementById('config-form');
-+  const priceDisplay = document.getElementById('price-display');
-+
-+  function updatePrice() {
-+    // TODO: Implement real-time price calculation based on form inputs
-+    priceDisplay.textContent = 'Cena: -- Kč (bude vypočtena)';
-+  }
-+
-+  form.addEventListener('input', updatePrice);
-+
-+  form.addEventListener('submit', (e) => {
-+    e.preventDefault();
-+    // TODO: finalize submit logic
-+    alert('Formulář byl odeslán. Funkce pro odeslání bude doplněna.');
-+  });
-+
-+  updatePrice();
-+});
- 
-EOF
-)
+document.addEventListener('DOMContentLoaded', () => {
+  const form = document.getElementById('config-form');
+  const areaInput = document.getElementById('area');
+  const deliverySelect = document.getElementById('delivery');
+  const priceDisplay = document.getElementById('price-display');
+
+  const rates = {
+    shell: 30000,
+    turnkey: 50000,
+  };
+
+  function updatePrice() {
+    const area = parseFloat(areaInput.value);
+    if (isNaN(area) || area <= 0) {
+      priceDisplay.textContent = 'Zadejte plochu pro výpočet ceny.';
+      return;
+    }
+    const rate = rates[deliverySelect.value] || 0;
+    const price = area * rate;
+    priceDisplay.textContent = `Cena: ${price.toLocaleString('cs-CZ')} Kč`;
+  }
+
+  form.addEventListener('input', updatePrice);
+
+  form.addEventListener('submit', (e) => {
+    e.preventDefault();
+    alert('Formulář byl odeslán.');
+  });
+
+  updatePrice();
+});
 
EOF
)
