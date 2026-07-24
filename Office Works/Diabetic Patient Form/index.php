<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diabetic History Form</title>
<style>
    :root {
        --ink: #1a1a1a;
        --rule: #1a1a1a;
        --paper: #ffffff;
        --page-bg: #e9e9e9;
        --error: #b3261e;
    }

    * { box-sizing: border-box; }

    body {
        font-family: Calibri, 'Segoe UI', Candara, Arial, sans-serif;
        background: var(--page-bg);
        color: var(--ink);
        margin: 0;
        padding: 32px 12px;
    }

    .sheet {
        max-width: 800px;
        margin: 0 auto;
        background: var(--paper);
        padding: 48px 56px 64px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    }

    .letterhead {
        text-align: center;
        margin-bottom: 8px;
    }
    .letterhead .clinic {
        font-size: 15pt;
        font-weight: bold;
        margin: 0;
    }
    .letterhead .doctor {
        font-size: 15pt;
        font-weight: bold;
        margin: 2px 0 0;
    }
    .letterhead-rule {
        border: none;
        border-top: 1.5px solid var(--rule);
        margin: 14px 0 26px;
    }

    .form-title {
        font-weight: bold;
        font-size: 12.5pt;
        margin: 0 0 22px;
    }

    .patient-row {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin-bottom: 30px;
        font-size: 11.5pt;
    }
    .field-inline {
        display: flex;
        align-items: baseline;
        gap: 6px;
        flex: 1 1 auto;
    }
    .field-inline.name { flex: 2 1 320px; }
    .field-inline.date { flex: 1 1 180px; }
    .field-inline label {
        white-space: nowrap;
        font-weight: normal;
    }
    .underline-input {
        border: none;
        border-bottom: 1px solid var(--ink);
        background: transparent;
        font-family: inherit;
        font-size: 11.5pt;
        padding: 2px 4px;
        flex: 1;
        min-width: 80px;
        outline: none;
    }
    .underline-input:focus { border-bottom: 1.5px solid #2a5db0; }

    ol.questions {
        list-style: none;
        counter-reset: q;
        margin: 0;
        padding: 0;
    }
    ol.questions > li {
        counter-increment: q;
        position: relative;
        padding-left: 30px;
        margin-bottom: 26px;
        font-size: 11.5pt;
        line-height: 1.5;
    }
    ol.questions > li::before {
        content: counter(q) ".";
        position: absolute;
        left: 0;
        font-weight: normal;
    }

    .q-text-row {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 8px;
    }
    .q-text-row .underline-input {
        flex: 1 1 220px;
    }

    .q-yesno-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 10px 24px;
    }
    .q-yesno-row .q-label { flex: 1 1 420px; }

    .yesno-options {
        display: flex;
        gap: 22px;
        white-space: nowrap;
        padding-top: 1px;
    }
    .yesno-options label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 11.5pt;
        cursor: pointer;
    }
    .yesno-options input[type="radio"] {
        width: 15px;
        height: 15px;
        accent-color: var(--ink);
        cursor: pointer;
    }

    .required-mark { color: var(--error); }

    .error-banner {
        background: #fdecea;
        border: 1px solid var(--error);
        color: var(--error);
        padding: 10px 16px;
        font-size: 10.5pt;
        margin-bottom: 22px;
    }

    .submit-row {
        margin-top: 40px;
        text-align: center;
    }
    .submit-btn {
        font-family: inherit;
        font-size: 12pt;
        font-weight: bold;
        background: #1a1a1a;
        color: #fff;
        border: none;
        padding: 12px 40px;
        cursor: pointer;
        letter-spacing: 0.3px;
    }
    .submit-btn:hover { background: #333; }

    @media (max-width: 600px) {
        .sheet { padding: 28px 20px 40px; }
        .q-yesno-row { flex-direction: column; }
        .yesno-options { padding-top: 4px; }
    }

    /* ── Review / confirmation modal ─────────────────────────── */
    .modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.55);
        z-index: 100;
        justify-content: center;
        align-items: flex-start;
        padding: 40px 12px;
        overflow-y: auto;
    }
    .modal-overlay.open { display: flex; }
    .modal-box {
        background: #fff;
        max-width: 620px;
        width: 100%;
        padding: 32px 36px 28px;
        box-shadow: 0 6px 24px rgba(0,0,0,0.3);
    }
    .modal-box h2 { font-size: 14pt; margin: 0 0 6px; }
    .modal-box .modal-sub { font-size: 10.5pt; color: #555; margin: 0 0 18px; }
    .review-row {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        padding: 9px 0;
        border-bottom: 1px solid #eee;
        font-size: 10.5pt;
    }
    .review-row .r-label { color: #444; flex: 1.4; }
    .review-row .r-value { font-weight: bold; text-align: right; flex: 1; word-break: break-word; }
    .review-row .r-value.empty { color: #b3261e; font-weight: normal; font-style: italic; }
    .confirm-line {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin: 20px 0 22px;
        font-size: 10.5pt;
        background: #fff8e1;
        border: 1px solid #e0c26a;
        padding: 12px 14px;
    }
    .confirm-line input[type="checkbox"] { width: 17px; height: 17px; margin-top: 1px; cursor: pointer; }
    .confirm-line label { cursor: pointer; line-height: 1.4; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 12px; }
    .modal-actions button {
        font-family: inherit; font-size: 11pt; padding: 10px 22px;
        cursor: pointer; border-radius: 3px;
    }
    .btn-close { background: #fff; border: 1px solid #999; color: #333; }
    .btn-close:hover { background: #f2f2f2; }
    .btn-confirm { background: #1a1a1a; border: 1px solid #1a1a1a; color: #fff; }
    .btn-confirm:disabled { background: #ccc; border-color: #ccc; cursor: not-allowed; }
    .btn-confirm:not(:disabled):hover { background: #333; }
</style>
</head>
<body>
<div class="sheet">

    <div class="letterhead">
        <p class="clinic">Endocrinology &amp; Diabetic Care Center</p>
        <p class="doctor">M. Mujahid Baig, M.D., F.A.C.E.</p>
    </div>
    <hr class="letterhead-rule">

    <p class="form-title">Diabetic History (Historia Diab&eacute;tica):</p>

    <?php if (isset($_GET['error'])): ?>
        <div class="error-banner">Please answer all required fields before submitting.</div>
    <?php endif; ?>

    <form action="submit.php" method="POST" autocomplete="off">

        <div class="patient-row">
            <div class="field-inline name">
                <label for="patient_name">Patient&rsquo;s Name (Nombre del paciente):</label>
                <input class="underline-input" type="text" id="patient_name" name="patient_name" required>
            </div>
            <div class="field-inline date">
                <label for="form_date">Date (Fecha):</label>
                <input class="underline-input" type="date" id="form_date" name="form_date" required>
            </div>
        </div>

        <ol class="questions">

            <li>
                <div class="q-text-row">
                    <span>How long have you been a diabetic? (&iquest;Cu&aacute;nto tiempo hace que es un diab&eacute;tico?)</span>
                    <input class="underline-input" type="text" name="q1_duration" required>
                </div>
            </li>

            <li>
                <div class="q-text-row">
                    <span>How often do you check your blood sugar levels? (&iquest;Con qu&eacute; frecuencia comprobar el nivel de az&uacute;car en la sangre?)</span>
                    <input class="underline-input" type="text" name="q2_check_frequency" required>
                </div>
            </li>

            <li>
                <div class="q-yesno-row">
                    <span class="q-label">Have you had hypoglycemia? (&iquest;Ha tenido hipoglucemia?)</span>
                    <span class="yesno-options">
                        <label><input type="radio" name="q3_hypoglycemia" value="Yes" required> Yes(S&iacute;)</label>
                        <label><input type="radio" name="q3_hypoglycemia" value="No"> No(No)</label>
                    </span>
                </div>
            </li>

            <li>
                <div class="q-yesno-row">
                    <span class="q-label">Have you gained or lost weight in the last 12 months? (&iquest;Ha subido o perdido peso en los &uacute;ltimos 12 meses?)</span>
                    <span class="yesno-options">
                        <label><input type="radio" name="q4_weight_change" value="Yes" required> Yes(S&iacute;)</label>
                        <label><input type="radio" name="q4_weight_change" value="No"> No(No)</label>
                    </span>
                </div>
            </li>

            <li>
                <div class="q-yesno-row">
                    <span class="q-label">Do you urinate frequently? (&iquest;Orinar con frecuencia)</span>
                    <span class="yesno-options">
                        <label><input type="radio" name="q5_frequent_urination" value="Yes" required> Yes(S&iacute;)</label>
                        <label><input type="radio" name="q5_frequent_urination" value="No"> No(No)</label>
                    </span>
                </div>
            </li>

            <li>
                <div class="q-yesno-row">
                    <span class="q-label">Do you have tingling, burning, or numb sensations in one or both feet? (&iquest;Tiene hormigueo, ardor, adormecimiento o sensaciones en uno o en ambos pies?)</span>
                    <span class="yesno-options">
                        <label><input type="radio" name="q6_tingling_feet" value="Yes" required> Yes(S&iacute;)</label>
                        <label><input type="radio" name="q6_tingling_feet" value="No"> No(No)</label>
                    </span>
                </div>
            </li>

            <li>
                <div class="q-yesno-row">
                    <span class="q-label">Have you seen an eye doctor? (&iquest;Has visto un m&eacute;dico de los ojos?)</span>
                    <span class="yesno-options">
                        <label><input type="radio" name="q7_seen_eye_doctor" value="Yes" required> Yes(S&iacute;)</label>
                        <label><input type="radio" name="q7_seen_eye_doctor" value="No"> No(No)</label>
                    </span>
                </div>
            </li>

            <li>
                <div class="q-yesno-row">
                    <span class="q-label">Have you been diagnosed with diabetes in the eyes? (&iquest;Ha sido diagnosticado con diabetes en los ojos)</span>
                    <span class="yesno-options">
                        <label><input type="radio" name="q8_diabetic_eye_dx" value="Yes" required> Yes(S&iacute;)</label>
                        <label><input type="radio" name="q8_diabetic_eye_dx" value="No"> No(No)</label>
                    </span>
                </div>
            </li>

            <li>
                <div class="q-yesno-row">
                    <span class="q-label">Do you have kidney disease? (&iquest;Tiene enfermedad renal?)</span>
                    <span class="yesno-options">
                        <label><input type="radio" name="q9_kidney_disease" value="Yes" required> Yes(S&iacute;)</label>
                        <label><input type="radio" name="q9_kidney_disease" value="No"> No(No)</label>
                    </span>
                </div>
            </li>

        </ol>

        <div class="submit-row">
            <button type="button" id="reviewBtn" class="submit-btn">Submit Form</button>
        </div>

    </form>
</div>

<!-- ── Review & confirm modal ─────────────────────────────────── -->
<div class="modal-overlay" id="modalOverlay">
    <div class="modal-box">
        <h2>Please review your answers</h2>
        <p class="modal-sub">Check that everything below is correct. You can close this window to go back and edit the form, or confirm to submit.</p>

        <div id="reviewList"></div>

        <div class="confirm-line">
            <input type="checkbox" id="confirmCheck">
            <label for="confirmCheck">I have checked all the details above and confirm they are correct.</label>
        </div>

        <div class="modal-actions">
            <button type="button" class="btn-close" id="modalCloseBtn">Close &amp; Edit</button>
            <button type="button" class="btn-confirm" id="modalConfirmBtn" disabled>Confirm &amp; Submit</button>
        </div>
    </div>
</div>

<script>
(function () {
    const form           = document.querySelector('form[action="submit.php"]');
    const reviewBtn      = document.getElementById('reviewBtn');
    const overlay        = document.getElementById('modalOverlay');
    const reviewList     = document.getElementById('reviewList');
    const confirmCheck   = document.getElementById('confirmCheck');
    const modalCloseBtn  = document.getElementById('modalCloseBtn');
    const modalConfirmBtn= document.getElementById('modalConfirmBtn');

    const fields = [
        { label: "Patient's Name",                 name: "patient_name", type: "text" },
        { label: "Date",                            name: "form_date",    type: "text" },
        { label: "How long have you been a diabetic?", name: "q1_duration", type: "text" },
        { label: "How often do you check blood sugar?", name: "q2_check_frequency", type: "text" },
        { label: "Have you had hypoglycemia?",      name: "q3_hypoglycemia",     type: "radio" },
        { label: "Gained or lost weight (12 months)?", name: "q4_weight_change", type: "radio" },
        { label: "Do you urinate frequently?",      name: "q5_frequent_urination", type: "radio" },
        { label: "Tingling / burning / numb feet?", name: "q6_tingling_feet",    type: "radio" },
        { label: "Have you seen an eye doctor?",    name: "q7_seen_eye_doctor",  type: "radio" },
        { label: "Diagnosed with diabetes in the eyes?", name: "q8_diabetic_eye_dx", type: "radio" },
        { label: "Do you have kidney disease?",     name: "q9_kidney_disease",   type: "radio" },
    ];

    function getValue(field) {
        if (field.type === "text") {
            const el = form.querySelector(`[name="${field.name}"]`);
            return el ? el.value.trim() : "";
        }
        const checked = form.querySelector(`[name="${field.name}"]:checked`);
        return checked ? checked.value : "";
    }

    function escapeHtml(str) {
        const d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    function buildReview() {
        reviewList.innerHTML = "";
        fields.forEach(field => {
            const val = getValue(field);
            const row = document.createElement('div');
            row.className = 'review-row';
            row.innerHTML = `
                <span class="r-label">${field.label}</span>
                <span class="r-value ${val ? '' : 'empty'}">${val ? escapeHtml(val) : 'Not answered'}</span>
            `;
            reviewList.appendChild(row);
        });
    }

    function openModal() {
        buildReview();
        confirmCheck.checked = false;
        modalConfirmBtn.disabled = true;
        overlay.classList.add('open');
    }

    function closeModal() {
        overlay.classList.remove('open');
    }

    reviewBtn.addEventListener('click', function () {
        // Native validation still enforces required fields.
        if (!form.reportValidity()) return;
        openModal();
    });

    modalCloseBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    confirmCheck.addEventListener('change', function () {
        modalConfirmBtn.disabled = !confirmCheck.checked;
    });

    modalConfirmBtn.addEventListener('click', function () {
        if (!confirmCheck.checked) return;
        form.submit();
    });
})();
</script>
</body>
</html>
