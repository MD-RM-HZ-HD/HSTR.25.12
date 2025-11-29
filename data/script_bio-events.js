// js/script_bio-events.js

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialize Navbar (إذا لم يتم تحميله تلقائياً)
    if (typeof loadNavbar === 'function') {
        loadNavbar({ pageType: 'sub', showTools: false });
    }

    // 2. Render Content from Data
    // نستهدف الـ Container الموجود في ملف HTML الجديد
    const container = document.getElementById('bio-events-container');
    
    // التحقق من وجود الحاوية والبيانات قبل التنفيذ
    if (!container || typeof bioEventsData === 'undefined') return;

    bioEventsData.forEach(section => {
        const detailsEl = document.createElement('details');
        detailsEl.className = 'group';
        detailsEl.open = true; // جعل الأقسام مفتوحة افتراضياً

        // Summary Header (عنوان القسم)
        detailsEl.innerHTML = `
            <summary>
                <div class="flex items-center gap-4">
                    <span class="text-3xl">${section.icon}</span>
                    <div class="flex flex-col text-right">
                        <span>${section.title}</span>
                        <span class="text-sm font-normal opacity-75">${section.subtitle}</span>
                    </div>
                </div>
                <span>▼</span>
            </summary>
        `;

        // Content Body (محتوى القسم)
        const contentDiv = document.createElement('div');
        
        // التعامل مع أنواع البيانات المختلفة
        if (section.type === 'custom-html') {
            contentDiv.innerHTML = section.content;
        } 
        else if (section.type === 'caliph-list') {
            contentDiv.className = 'tree-section grid-responsive';
            section.items.forEach(item => {
                const card = document.createElement('div');
                card.className = `caliph-card ${item.style}`;
                
                let detailsHtml = item.details.map(d => `
                    <div class="mb-6">
                        <div class="item-title">${d.title}</div>
                        <div class="text-secondary leading-relaxed pr-2">${d.text}</div>
                    </div>
                `).join('');

                card.innerHTML = `
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-lg">${item.name}</h3>
                        <span class="badge ${item.badgeClass}">${item.death}</span>
                    </div>
                    <span class="caliph-full-name">${item.fullName}</span>
                    <div class="space-y-4 mt-4">${detailsHtml}</div>
                `;
                contentDiv.appendChild(card);
            });
        }
        else if (section.type === 'timeline') {
            contentDiv.className = 'tree-section pt-4';
            section.items.forEach(item => {
                const isSimple = item.badge === 'badge';
                const badgeClass = isSimple ? `style="color: ${item.color}; border-color: ${item.color};"` : `class="badge ${item.badge}"`;
                
                const timelineItem = document.createElement('div');
                timelineItem.className = 'relative block mb-6 timeline-item';
                timelineItem.innerHTML = `
                    <div class="absolute -right-[2.45rem] top-4 w-4 h-4 rounded-full border-2 z-10" style="background-color: ${item.color};"></div>
                    <div class="p-4 relative border-r-4" style="border-right-color: ${item.color};">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-bold text-lg">${item.title}</h3>
                            <span ${badgeClass}>${item.year}</span>
                        </div>
                        <div style="color: var(--text-secondary);">${item.desc}</div>
                    </div>
                `;
                contentDiv.appendChild(timelineItem);
            });
            
            // Append Footer Statistics manually for timeline
            const footerStats = document.createElement('div');
            footerStats.className = 'grid-responsive mt-8';
            footerStats.innerHTML = `
                 <div class="analysis-box" style="border-right-color: #eab308;">
                    <h4 class="font-bold text-lg mb-3">📝 ملاحظات مهمة</h4>
                    <ul class="list-disc list-inside space-y-2" style="color: var(--text-secondary);">
                        <li><strong>مدة إمامة الهادي (ع):</strong> 34 سنة.</li>
                        <li><strong>مدة إمامة العسكري (ع):</strong> 6 سنوات.</li>
                        <li><strong>مدة الغيبة الصغرى:</strong> 69 سنة.</li>
                    </ul>
                </div>
            `;
            contentDiv.appendChild(footerStats);
        }

        detailsEl.appendChild(contentDiv);
        container.appendChild(detailsEl);
    });
});