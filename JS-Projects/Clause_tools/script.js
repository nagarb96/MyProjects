// First select all input fields and preview elements
let agreementTitleInput = document.getElementById('agreement-title');
const agreementDateInput = document.getElementById('agreement-date');
const ceNameInput = document.getElementById('covered-entity');
const ceAddrInput = document.getElementById('covered-entity-address');
const baNameInput = document.getElementById('business-associate');
const baAddrInput = document.getElementById('business-associate-address');
const selectLogo = document.getElementById('selectLogo');
const selectWatermark = document.getElementById('selectWatermark');

// Select preview elements
const previewTitle = document.querySelectorAll('#previewTitle');
const previewDate = document.getElementById('previewDate');
const previewCe = document.getElementById('previewCe');
const previewCeAddr = document.getElementById('previewCeAddr');
const previewBa = document.getElementById('previewBa');
const previewBaAddr = document.getElementById('previewBaAddr');
const previewLogo = document.getElementById('previewLogo');
const previewWatermark = document.getElementById('previewWatermark');

// Function to handle watermark preview and print styling
const setWatermarkPreviewStyle = () => {
  previewWatermark.style.width = '100%';
  previewWatermark.style.height = 'auto';
  previewWatermark.style.position = 'fixed';
  previewWatermark.style.top = '50%';
  previewWatermark.style.left = '50%';
  previewWatermark.style.transform = 'translate(-50%, -50%)';
  previewWatermark.style.objectFit = 'contain';
  previewWatermark.style.zIndex = '-1';
  previewWatermark.style.pointerEvents = 'none';
  previewWatermark.style.display = 'none';   // Browser preview me hidden
};

// Watermark upload handler
selectWatermark.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewWatermark.src = e.target.result;
      setWatermarkPreviewStyle();
    };
    reader.readAsDataURL(file);
  }
});

// Apply watermark style before printing
window.addEventListener('beforeprint', setWatermarkPreviewStyle);

// Logo upload handler
selectLogo.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewLogo.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});




// Real-time preview updates
agreementTitleInput.addEventListener('input', () => {
  previewTitle.forEach(el => {
    el.textContent = agreementTitleInput.value;
  });
});

// Update agreement date preview
agreementDateInput.addEventListener('input', () => {
  const dateValue = agreementDateInput.value;
  if (!dateValue) {
    previewDate.textContent = '';
    return;
  }
  const date = new Date(dateValue);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  previewDate.textContent = date.toLocaleDateString('en-US', options) + ',';
});
// Update covered entity name
ceNameInput.addEventListener('input', () => {
  previewCe.textContent = ceNameInput.value;
});

// Update covered entity address
ceAddrInput.addEventListener('input', () => {
  previewCeAddr.textContent = ceAddrInput.value;
});

// Update business associate name
baNameInput.addEventListener('input', () => {
  previewBa.textContent = baNameInput.value;
});

// Update business associate address
baAddrInput.addEventListener('input', () => {
  previewBaAddr.textContent = baAddrInput.value;
}); 




// ================= SECTION FUNCTIONS =================

// Add new section
function addSimpleSection(){

    const container = document.getElementById("sectionsContainer");
    const section = document.createElement("div");
    section.className = "section";
    section.innerHTML = `
        <div class="section-buttons">
            <button class="delete-section" onclick="deleteSection(this)">Delete</button>
            <button class="add-paragraph" onclick="addParagraphToSection(this)">Add Paragraph</button>
            <button class="add-point" onclick="addPointToSection(this)">Add Point</button>
        </div>
        <div class="section-title" contenteditable="true">New Section</div>
        <div class="paragraph-wrapper">
    <p contenteditable="true">Write paragraph here...</p>
    <div class="paragraph-buttons">
        <button onclick="deleteParagraph(this)">Delete Paragraph</button>
    </div>
</div> `;
    container.appendChild(section);
    updateSectionBorderStyles();
}

// Add paragraph inside section
function addParagraphToSection(button){
    const section = button.closest(".section");

    const wrapper = document.createElement("div");
    wrapper.className = "paragraph-wrapper";
    wrapper.innerHTML = `
        <p contenteditable="true">Write paragraph here...</p>
        <div class="paragraph-buttons">
            <button onclick="addParagraph(this)">Add Paragraph</button>
            <button onclick="deleteParagraph(this)">Delete Paragraph</button>
        </div>
    `;

  // Insert paragraph after section title
    const sectionTitle = section.querySelector(".section-title");
    sectionTitle.insertAdjacentElement("afterend", wrapper);
}

// Delete paragraph
function deleteParagraph(button){
    const wrapper = button.closest(".paragraph-wrapper");
    if(wrapper){
        wrapper.remove();
    }
}


// Delete section
function deleteSection(button){
    button.closest(".section").remove();
    updateSectionBorderStyles();
}

// Remove top border from first section
function updateSectionBorderStyles(){
    const container = document.getElementById("sectionsContainer");
    if(!container) return;
    const sections = container.querySelectorAll(".section");
    sections.forEach((section, index) => {
        if(index === 0){
            section.style.borderTop = "none";
        } else {
            section.style.borderTop = "";
        }
    });
}
// Run border update on page load
window.addEventListener('DOMContentLoaded', updateSectionBorderStyles);





// ================= POINT FUNCTIONS =================

// Add main point section

function addPointToSection(button){
    const section = button.closest(".section");
    // If an existing list exists but is empty (no li), remove it so we can add fresh
    const existingList = section.querySelector("ol, ul");
    if (existingList) {
        if (existingList.children.length === 0) {
            existingList.remove();
        } else {
            return; // list with items already present -> don't add another
        }
    }
    const list = document.createElement("ol");
    list.className = "roman-list";
    list.innerHTML = `
        <li>
            <span contenteditable="true">New Point</span>
            <div class="point-toolbar">
                <select>
                    <option value="alpha-list"> 
                        a,b,c
                    </option>

                    <option value="roman-list">
                        i,ii,iii
                    </option>

                    <option value="number-list">
                        1,2,3
                    </option>

                    <option value="bullet-list">
                        • Bullet
                    </option>

                    <option value="square-list">
                        ▪ Square
                    </option>
                </select>

                <button onclick="addChildPoint(this)">Add Child</button>
                <button onclick="addSiblingPoint(this)">Add Next</button>
                <button onclick="deletePoint(this)">Delete</button>
            </div>
        </li>
    `;
    section.appendChild(list);
}


// Add child point
function addChildPoint(button){
    const toolbar = button.parentElement;
    const li = toolbar.parentElement;
    const select = toolbar.querySelector("select");
    const listClass = select.value;

    let childList = li.querySelector(":scope > ol, :scope > ul");
    if(!childList){
        childList = document.createElement(
            listClass.includes("bullet") ||
            listClass.includes("square")
            ? "ul"
            : "ol"
        );
        childList.className = listClass;
        li.appendChild(childList);
    }
    const newLi = document.createElement("li");
    newLi.innerHTML = `
        <span contenteditable="true">New Child Point</span>
        <div class="point-toolbar">
            <select>
                <option value="alpha-list">
                    a,b,c
                </option>

                <option value="roman-list">
                    i,ii,iii
                </option>

                <option value="number-list">
                    1,2,3
                </option>

                <option value="bullet-list">
                    • Bullet
                </option>

                <option value="square-list">
                    ▪ Square
                </option>
            </select>

            <button onclick="addChildPoint(this)">Add Child</button>
            <button onclick="addSiblingPoint(this)">Add Next</button>
            <button onclick="deletePoint(this)">Delete</button>
        </div>
    `;
    childList.appendChild(newLi);
}


// Add same level point
function addSiblingPoint(button){

    const li = button.parentElement.parentElement;
    const newLi = document.createElement("li");
    newLi.innerHTML = `
        <span contenteditable="true">New Point</span>
        <div class="point-toolbar">

            <select>
                <option value="alpha-list">
                    a,b,c
                </option>

                <option value="roman-list">
                    i,ii,iii
                </option>

                <option value="number-list">
                    1,2,3
                </option>

                <option value="bullet-list">
                    • Bullet
                </option>

                <option value="square-list">
                    ▪ Square
                </option>
            </select>

            <button onclick="addChildPoint(this)">Add Child</button>
            <button onclick="addSiblingPoint(this)">Add Next</button>
            <button onclick="deletePoint(this)">Delete</button>
        </div>
    `;
    li.parentElement.appendChild(newLi);
}

// Delete point
function deletePoint(button){
    const li = button.closest("li");
    if(li) li.remove();
}

// Print and save PDF
function printPDF(){
    window.print();
}
