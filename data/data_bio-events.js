// js/data_bio-events.js

const bioEventsData = [
    {
        id: "imams",
        title: "الأئمة الأطهار (عليهم السلام)",
        subtitle: "الملف القيادي والشخصي، التحديات الفكرية، والمعجزات",
        icon: "🌿",
        type: "custom-html",
        content: `
            <div class="tree-section">
                <div class="tree-node rounded-xl p-6">
                    <div class="flex flex-col items-start gap-4 mb-6">
                        <div class="w-full">
                            <h3 class="text-green-700 dark:text-green-400">1. الإمام علي بن محمد الهادي (ع)</h3>
                            <span class="badge badge-green">212 هـ - 254 هـ</span>
                        </div>
                        <div class="info-details-box w-full">
                            <div><strong>الولادة:</strong> 15 ذو الحجة 212هـ (صريا - المدينة).</div>
                            <div><strong>الشهادة:</strong> 3 رجب 254هـ (سامراء - مسموماً).</div>
                            <div><strong>الإقامة:</strong> 14 سنة بالمدينة، 20 سنة بسامراء (سر من رأى).</div>
                            <div><strong>المعاصرون:</strong> المعتصم، الواثق، المتوكل، المنتصر، المستعين، المعتز.</div>
                        </div>
                    </div>
                    <div class="grid-responsive">
                        <div class="analysis-box">
                            <h4>🎓 التحدي الفكري والعلمي</h4>
                            <div class="mb-6">
                                <div class="item-title text-green-700">المعلم <span class="badge badge-green">الجنيدي</span>:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    عينه المعتصم (الناصبي) لغرس بغض أهل البيت في الإمام الصبي (8 سنوات).
                                    <br><strong>النتيجة:</strong> انبهر الجنيدي بعلم الإمام وقال: "أنا والله أتعلم منه.. يقرأ السور الطوال بصوت أطيب من مزامير داود"، وتحول للولاء.
                                </div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title text-green-700">مناظرات <span class="badge badge-blue">يحيى بن أكثم</span>:</div>
                                <div class="text-secondary leading-relaxed pr-2">أفحمه الإمام في 13 مسألة معقدة (مثل: سجود يعقوب، ميراث الخنثى، الجهر في فجر الجمعة، وقتل أهل صفين والجمل).</div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title text-purple-700">فتنة خلق القرآن:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    حسم الجدل برسالة لبغداد: <div class="special-quote">"الجدال في القرآن بدعة... وليس الخالق إلا الله وما سواه مخلوق"</div>
                                </div>
                            </div>
                        </div>
                        <div class="analysis-box">
                            <h4>⚔️ الصراع مع السلطة والكرامات</h4>
                            <div class="mb-6">
                                <div class="item-title text-red-700">الإشخاص (النفي):</div>
                                <div class="text-secondary leading-relaxed pr-2">بوشاية <span class="badge badge-red">بريحة العباسي</span>، نقله <span class="badge badge-blue">يحيى بن هرثمة</span> لسامراء (234هـ) واستقبلوه في "خان الصعاليك" للإهانة.</div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title text-red-700">مجلس الخمر (المتوكل):</div>
                                <div class="text-secondary leading-relaxed pr-2">أجبره المتوكل على الحضور وهو يشرب، فأنشده قصيدة "باتوا على قلل الأجبال" التي أبكت الطاغية وحطم كأسه.</div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title text-red-700">دعاء المظلوم:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    بعد إهانته بمشي الرَّجَّالة، دعا عليه: <div class="special-quote">"تمتعوا في داركم ثلاثة أيام"</div> فهلك المتوكل بعد 3 أيام بالضبط.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tree-node rounded-xl p-6 mt-6 border-l-4 border-l-yellow-500 bg-yellow-50">
                    <div class="flex flex-col items-start gap-2 mb-4">
                        <div class="w-full flex justify-between items-center">
                            <h3 class="text-yellow-800">⭐ السيد محمد (سبع الدجيل)</h3>
                            <span class="badge badge-yellow">توفي حوالي 252هـ</span>
                        </div>
                        <div class="text-secondary w-full">
                            <strong>النسب:</strong> أبو جعفر محمد بن الإمام الهادي (الابن الأكبر).<br>
                            <strong>المكانة:</strong> كان جليلاً، عظيم الشأن، اعتقد الناس أنه الإمام بعد أبيه.<br>
                            <strong>الوفاة:</strong> توفي في حياة أبيه (قبل استشهاد الهادي بسنتين) في منطقة "بلد".
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 class="text-sm font-bold text-gray-700 mb-2">💡 تصحيح المسار (البداء):</h4>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            كانت وفاته تمهيداً إلهياً لتثبيت إمامة <strong>الحسن العسكري (ع)</strong>. قال الهادي (ع) للحسن بعد وفاة محمد:
                            <div class="special-quote text-center mt-2 text-xs">"يا بني أحدث لله شكراً، فقد أحدث فيك أمراً"</div>
                        </p>
                    </div>
                </div>

                <div class="tree-node rounded-xl p-6 mt-6">
                    <div class="flex flex-col items-start gap-4 mb-6">
                        <div class="w-full">
                            <h3 class="text-green-700 dark:text-green-400">2. الإمام الحسن بن علي العسكري (ع)</h3>
                            <span class="badge badge-green">232 هـ - 260 هـ</span>
                        </div>
                        <div class="info-details-box w-full">
                            <div><strong>الولادة:</strong> 232هـ (المدينة). <strong>الانتقال:</strong> لسامراء بعمر سنتين.</div>
                            <div><strong>الشهادة:</strong> 8 ربيع الأول 260هـ (سامراء - مسموماً).</div>
                            <div><strong>المدة:</strong> 6 سنوات (أقصر مدة إمامة في ظرف أمني خانق).</div>
                        </div>
                    </div>
                    <div class="grid-responsive">
                        <div class="analysis-box"> 
                            <h4>🛡️ حماية العقيدة ومواجهة الفلسفة</h4>
                            <div class="mb-6">
                                <div class="item-title text-green-800">إسقاط الفيلسوف <span class="badge badge-blue">الكندي</span>:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    كان يؤلف كتاباً في <strong>"تناقض القرآن"</strong>. أرسل له الإمام تلميذاً بسؤال ذكي: 
                                    <div class="special-quote">"لعل الله أراد غير المعاني التي ذهبت إليها؟"</div>
                                    فأدرك الكندي خطأه وقال: "ما خرج هذا إلا من ذلك البيت" وأحرق كتابه.
                                </div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title text-green-800">فتنة الراهب والمطر:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    استسقى راهب فنزل المطر وارتد الناس. كشف الإمام (وهو خارج من السجن) أن الراهب يمسك <strong>"عظماً من عظام الأنبياء"</strong>، فأسقط المعجزة المزيفة.
                                </div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title text-red-700">مواجهة الغلاة والمفوضة:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    لعن <span class="badge badge-red">ابن حسكة</span> و<span class="badge badge-red">القاسم اليقطيني</span> وأمر بقتلهم لادعائهم الألوهية للأئمة أو تفويض الخلق لهم.
                                </div>
                            </div>
                        </div>
                        <div class="analysis-box">
                            <h4>⛓️ التنظيم السري والتمهيد للغيبة</h4>
                            <div class="mb-6">
                                <div class="item-title text-purple-700">نظام الوكلاء الصارم:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    استخدم "الخشبة" (رجل باب مدورة) لنقل الرسائل للعمري. أمر شيعته:
                                    <div class="special-quote">"لا يسلمن عليّ أحد منكم ولا يشير إليّ بيده"</div>
                                </div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title text-purple-700">السجون:</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    سُجن عند <span class="badge badge-red">صالح بن وصيف</span>، و<span class="badge badge-red">علي بن جرين</span>، و<span class="badge badge-red">نحرير</span> (الذي رماه للأسود فخضعت له).
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tree-node rounded-xl p-6 mt-6">
                    <div class="mb-6">
                        <h3 class="text-green-700 dark:text-green-400 mb-4">3. الإمام محمد بن الحسن المهدي (عج)</h3>
                        <span class="badge badge-blue mb-4">ولد 15 شعبان 255هـ - حي يرزق</span>
                    </div>
                    <div class="grid-responsive">
                        <div class="analysis-box">
                            <h4 class="font-bold">👶 الولادة السرية</h4>
                            <div class="mb-6">
                                <div class="item-title">السيدة حكيمة:</div>
                                <div class="text-secondary leading-relaxed pr-2">شهدت الولادة ليلة النصف من شعبان. كان الأمر مكتوماً تماماً خوفاً من السلطة.</div>
                            </div>
                            <div class="mb-6">
                                <div class="item-title">وفد الأربعين (قمة التمهيد):</div>
                                <div class="text-secondary leading-relaxed pr-2">
                                    جمع العسكري 40 من وجهاء الشيعة وعرض عليهم ولده وقال:
                                    <div class="special-quote">"هذا إمامكم من بعدي... ولن تروه بعد يومكم هذا"</div>
                                </div>
                            </div>
                        </div>
                        <div class="analysis-box">
                            <h4 class="font-bold">⚡ الظهور الأول (الصلاة):</h4>
                            <p>يوم استشهاد والده، تقدم عمه <span class="badge badge-red">جعفر الكذاب</span> للصلاة، فخرج الصبي (المهدي) وجذب رداء عمه وقال:</p>
                            <div class="special-quote">"تأخر يا عم، أنا أحق بالصلاة على أبي"</div>
                            <p>فصلى عليه وغاب، لتبدأ الغيبة الصغرى.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "caliphs",
        title: "سلاطين القهر: الخلفاء العباسيين",
        subtitle: "التسلسل الزمني، الجرائم، والنهايات (فترة نفوذ الأتراك)",
        icon: "👑",
        type: "custom-html",
        content: `
            <div class="tree-section grid-responsive">
                
                <div class="caliph-card mb-4">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg text-red-900">1. المعتصم بالله <span class="badge badge-red">قاتل الجواد</span> <span class="text-sm text-gray-600 font-normal">(محمد بن هارون)</span></h3></div>
                        <span class="badge badge-yellow">حكم: 218 - 227 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 179 هـ</div>
                        <div><strong>الوفاة:</strong> 227 هـ (48 سنة)</div>
                    </div>
                    <div class="bg-gray-100 p-2 rounded mb-2 text-sm border-r-4 border-gray-400">
                        <strong>الوفاة:</strong> طبيعية (احتجم في غير وقت الحجامة).
                    </div>
                    <div class="text-sm border-t pt-2 mt-2">
                        <strong>الجريمة:</strong> استشهاد الإمام الجواد (ع) في عهده (مسموماً).<br>
                        <strong>مع الهادي:</strong> عين <span class="badge badge-green">الجنيدي</span> لاحتوائه صبياً لكنه فشل.
                    </div>
                    <div class="text-sm mt-1">
                        <strong>أحداث:</strong> بداية عصر نفوذ الأتراك (المغاربة والفراعنة).
                    </div>
                </div>

				<div class="caliph-card mb-4">
					<div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
						<div><h3 class="font-bold text-lg">2. الواثق بالله <span class="text-sm text-gray-600 font-normal">(هارون بن المعتصم)</span></h3></div>
						<span class="badge badge-yellow">حكم: 227 - 232 هـ</span>
					</div>
					<div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
						<div><strong>الولادة:</strong> 196 هـ</div>
						<div><strong>الوفاة:</strong> 232 هـ (36 سنة)</div>
					</div>
					<div class="bg-gray-100 p-2 rounded mb-2 text-sm border-r-4 border-gray-400">
						<strong>الوفاة:</strong> طبيعية (الاستسقاء - مات في تنور للعلاج).
					</div>
					<div class="text-sm border-t pt-2 mt-2">
					<strong>فتنة القرآن (المحنة):</strong>
					تشدد الواثق فيها جداً، حيث استولى <span class="badge badge-green">أحمد بن أبي دؤاد</span> على الخليفة وحمله على التشدّد في المحنة ودعا الناس إلى القول بخلق القرآن.
						<ul>
						<li><strong>الظلم والقتل:</strong> قام الواثق بقتل <span class="badge badge-green">أحمد بن نصر الخزاعي</span> بيده ثم صلبه لمدة ست سنين.</li>
						<li><strong>ضحايا المحنة:</strong> من جملة من شملهم الظلم <span class="badge badge-green">أبو يعقوب يوسف بن يحيى البويطي</span> (صاحب الشافعي) - الذي توفي في السجن سنة 231 هـ - محبوساً ومقيداً لرفضه القول بخلق القرآن.</li>
						<li><strong>الإفراج المشروط:</strong> أطلق الواثق 1600 أسير بشرط القول بخلق القرآن.</li>
						</ul>
					</div>
					<div class="text-sm border-t pt-2 mt-2">
						<strong>الإسراف في اللهو والمفاسد:</strong> كان الواثق كأسلافه مُسرفاً في حياته ومائلاً للمفاسد واللهو.
					</div>
					<div class="text-sm border-t pt-2 mt-2">
						<strong>الغناء:</strong> كان أعلم الخلفاء بالغناء، وألّف نحو <span class="badge badge-green">مائة صوت ولحن</span>، وكان وافر الأدب ومليح الشعر وحاذقاً في ضرب العود.
					</div>
					<div class="text-sm border-t pt-2 mt-2">
						<strong>الميل للغلمان والتعبير الشعري:</strong> كان الواثق مُحباً للغلمان، وقال شعراً في <span class="badge badge-green">خادمه الذي صدّه</span>، مُظهراً شدة هواه وسلطة المحبوب عليه.
					</div>
				</div>

                <div class="caliph-card mb-4 border-l-4 border-l-red-600">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg text-red-700">3. المتوكل على الله <span class="text-sm text-gray-600 font-normal">(جعفر بن المعتصم)</span></h3></div>
                        <span class="badge badge-yellow">حكم: 232 - 247 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 205 هـ</div>
                        <div><strong>الوفاة:</strong> 247 هـ (42 سنة)</div>
                    </div>
                    <div class="bg-red-50 p-2 rounded mb-2 text-sm border-r-4 border-red-500">
                        <strong>القتل:</strong> <span class="text-red-700">ضربه 5 من الأتراك بالسيوف وهو سكران حتى سقط مخه (قطع إرباً هو والفتح بن خاقان).</span><br>
                        <strong>القاتل:</strong> باغر التركي (بتحريض ابنه المنتصر).
                    </div>
                    <div class="text-sm border-b pb-2 mb-2">
                         <strong>العداء:</strong> هدم قبر الحسين (ع) وحرثه. فرض الحصار الاقتصادي (العلويات بثوب واحد). قتل يعقوب بن السكيت.
                    </div>
                    <div class="text-sm mb-2">
                        <strong>بذخ القصور:</strong> أنفق الملايين (الجعفري، البرج، المليح).
                    </div>
                    <div class="text-sm text-green-800 bg-green-50 p-1 rounded">
                         <strong>مع الإمام:</strong> أشخص الهادي لسامراء (234هـ). دعا عليه الإمام "تمتعوا في داركم 3 أيام" فهلك بعدها.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-l-4 border-l-green-600">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg text-green-800">4. المنتصر بالله <span class="badge badge-green">الانفراجة</span></h3></div>
                        <span class="badge badge-yellow">حكم: 247 - 248 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 223 هـ</div>
                        <div><strong>الوفاة:</strong> 248 هـ (25 سنة)</div>
                    </div>
                    <div class="bg-red-50 p-2 rounded mb-2 text-sm border-r-4 border-red-500">
                        <strong>القتل:</strong> فُصد بمبضع مسموم (على يد طبيبه ابن طيفور بإيعاز من الأتراك).
                    </div>
                    <div class="text-sm border-t pt-2 mt-2">
                        <strong>السياسة:</strong> خالف أبيه، رد فدك، أحسن للعلويين، أزال الخوف عنهم، سمح بزيارة قبر الحسين.
                    </div>
                </div>

                <div class="caliph-card mb-4">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg">5. المستعين بالله <span class="text-sm text-gray-600 font-normal">(أحمد بن محمد)</span></h3></div>
                        <span class="badge badge-yellow">حكم: 248 - 252 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 221 هـ</div>
                        <div><strong>الوفاة:</strong> 252 هـ (31 سنة)</div>
                    </div>
                    <div class="bg-red-50 p-2 rounded mb-2 text-sm border-r-4 border-red-500">
                        <strong>القتل:</strong> ذُبح (قُطع رأسه) وأُرسل رأسه للمعتز وهو يلعب الشطرنج.<br>
                        <strong>القاتل:</strong> سعيد بن صالح الحاجب.
                    </div>
                    <div class="text-sm border-t pt-2 mt-2">
                        <strong>الوضع:</strong> "خليفة في قفص بين وصيف وبغا". حدثت الفتنة الكبرى وحصار بغداد.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-l-4 border-l-gray-600">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg">6. المعتز بالله (الزبيري) <span class="badge badge-red">قاتل الهادي</span></h3></div>
                        <span class="badge badge-yellow">حكم: 252 - 255 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 232 هـ</div>
                        <div><strong>الوفاة:</strong> 255 هـ (24 سنة)</div>
                    </div>
                    <div class="bg-red-50 p-2 rounded mb-2 text-sm border-r-4 border-red-500">
                        <strong>القتل:</strong> أول خليفة يموت عطشاً. (ضربوه، أقاموه في الشمس، منعوه الماء، ثم أدخلوه سرداباً وسدوه).
                    </div>
                    <div class="text-sm border-t pt-2 mt-2">
                        <strong>الجريمة:</strong> استشهاد الإمام الهادي (ع) في عهده (بالسم). حاول ترحيل العسكري للكوفة.
                        <br><strong>تنبؤ الإمام:</strong> قال العسكري "بعد ثلاث يأتيكم الفرج"، فخلع وقتل بعد 3 أيام.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-l-4 border-l-yellow-600">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg">7. المهتدي بالله <span class="badge badge-yellow">المخادع</span></h3></div>
                        <span class="badge badge-yellow">حكم: 255 - 256 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 218 هـ</div>
                        <div><strong>الوفاة:</strong> 256 هـ (38 سنة)</div>
                    </div>
                    <div class="bg-red-50 p-2 rounded mb-2 text-sm border-r-4 border-red-500">
                        <strong>القتل:</strong> "عصراً" (عصروا خصيتيه حتى مات).<br>
                        <strong>القاتل:</strong> الأتراك بقيادة يارجور.
                    </div>
                    <div class="text-sm border-t pt-2 mt-2">
                        <strong>الاستراتيجية:</strong> تظاهر بالزهد (مثل عمر بن عبدالعزيز) للإضرار بمكانة الإمام. هدد قائلاً "لأخلينهم عن جديد الأرض".
                    </div>
                </div>

                <div class="caliph-card mb-4 border-l-4 border-l-red-600">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg">8. المعتمد على الله <span class="badge badge-red">قاتل العسكري</span></h3></div>
                        <span class="badge badge-yellow">حكم: 256 - 279 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 229 هـ</div>
                        <div><strong>الوفاة:</strong> 279 هـ (50 سنة)</div>
                    </div>
                    <div class="bg-gray-200 p-2 rounded mb-2 text-sm border-r-4 border-gray-500">
                        <strong>الوفاة:</strong> فجأة (وقيل سُم في كأس نبيذ).
                    </div>
                    <div class="text-sm border-t pt-2 mt-2">
                        <strong>الجريمة:</strong> دس السم للإمام العسكري (260هـ). أمر برمي الإمام للأسود (بركة السباع) فخضعت له.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-l-4 border-l-blue-600">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                        <div><h3 class="font-bold text-lg text-blue-800">9. المعتضد بالله <span class="text-sm text-gray-600 font-normal">(أحمد بن الموفق)</span></h3></div>
                        <span class="badge badge-yellow">حكم: 279 - 289 هـ</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm mb-3 text-secondary">
                        <div><strong>الولادة:</strong> 242 هـ</div>
                        <div><strong>الوفاة:</strong> 289 هـ (47 سنة)</div>
                    </div>
                    <div class="bg-gray-100 p-2 rounded mb-2 text-sm border-r-4 border-gray-400">
                        <strong>الوفاة:</strong> مرض جنسي أو سم.
                    </div>
                    <div class="text-sm border-t pt-2 mt-2">
                        <strong>أحداث:</strong> أسس دولة قوية، وظهرت القرامطة في عهده. (نهاية السلسلة).
                    </div>
                </div>

            </div>
        `
    },
{
        id: "revolutions",
        title: "الثورات والاضطرابات",
        subtitle: "الزنج، العلويون، والخوارج",
        icon: "🔥",
        type: "custom-html",
        content: `
            <div class="tree-section">
                <div class="analysis-box border-r-4 border-orange-500 mb-6">
                    <h3 class="font-bold text-xl mb-2">1. ثورة الزنج (255-270هـ)</h3>
                    <div class="grid md:grid-cols-2 gap-4 text-sm text-secondary">
                        <div><strong>القائد:</strong> علي بن محمد (<span class="badge badge-red">صاحب الزنج</span>).</div>
                        <div><strong>النسب:</strong> ادعى النسب العلوي كذباً.</div>
                        <div><strong>الموقف الشرعي:</strong> قال الإمام العسكري: <span class="special-quote inline-block text-xs">"صاحب الزنج ليس منا أهل البيت"</span>.</div>
                        <div><strong>النطاق:</strong> البصرة، الأهواز، عبادان (استمرت 14 سنة).</div>
                        <div class="md:col-span-2"><strong>النتيجة:</strong> تسببت بقتل ونهب واسع، أنهكت الدولة اقتصادياً وعسكرياً، وانتهت بمقتله وسحق ثورته.</div>
                    </div>
                </div>

                <div class="grid-responsive mt-4">
                    
                    <div class="caliph-card border-l-4 border-l-red-500">
                        <div class="item-title text-red-800">2. ثورة يحيى بن عمر (الكوفة)</div>
                        <ul class="list-disc list-inside mt-2 text-secondary text-sm space-y-1">
                            <li><strong>النسب:</strong> يحيى بن عمر بن الحسين بن زيد بن علي بن الحسين (ع).</li>
                            <li><strong>الشعار:</strong> "الرضا من آل محمد".</li>
                            <li><strong>الهدف:</strong> رفع الظلم والعدل (عُرف بحسن السيرة والعدل).</li>
                            <li><strong>المسار:</strong> انطلقت من كربلاء إلى الكوفة.</li>
                            <li><strong>النتيجة:</strong> قُتل في المعركة، وحزن عليه الناس كثيراً لعدله.</li>
                        </ul>
                    </div>

                    <div class="caliph-card border-l-4 border-l-red-500">
                        <div class="item-title text-red-800">3. ثورة علي بن زيد (256هـ)</div>
                        <ul class="list-disc list-inside mt-2 text-secondary text-sm space-y-1">
                            <li><strong>المكان:</strong> الكوفة.</li>
                            <li><strong>الأحداث:</strong> استولى عليها وأزال نائب الخليفة، وهزم جيش "الشاه بن مكيال".</li>
                            <li><strong>النهاية:</strong> واجهه "كيجور التركي" في القادسية، فهُزم علي بن زيد وقُتل، وقُتل جماعة كبيرة من أصحابه.</li>
                        </ul>
                    </div>

                    <div class="caliph-card border-l-4 border-l-yellow-500">
                        <div class="item-title text-yellow-800">4. حركة ابن الصوفي (مصر)</div>
                        <ul class="list-disc list-inside mt-2 text-secondary text-sm space-y-1">
                            <li><strong>القائد:</strong> إبراهيم بن محمد (المعرف بابن الصوفي).</li>
                            <li><strong>النسب:</strong> من ولد عمر بن علي بن أبي طالب.</li>
                            <li><strong>السيطرة:</strong> ملك مدينة "إسنا" في صعيد مصر.</li>
                            <li><strong>المعارك:</strong> خاض معارك عنيفة مع جيش "أحمد بن طولون".</li>
                            <li><strong>النتيجة:</strong> هُزم في المرة الأولى، ثم عاد وهزم (259هـ)، فهرب للمدينة، فأُلقي القبض عليه وأُرسل لابن طولون.</li>
                        </ul>
                    </div>

                    <div class="caliph-card border-l-4 border-l-green-500">
                        <div class="item-title text-green-800">5. الحسن بن زيد العلوي</div>
                        <ul class="list-disc list-inside mt-2 text-secondary text-sm space-y-1">
                            <li><strong>اللقب:</strong> "الداعي الكبير".</li>
                            <li><strong>المنطقة:</strong> طبرستان وجرجان.</li>
                            <li><strong>الإنجاز:</strong> استولى على جرجان، وقتل كثيراً من عساكر العباسيين، وغنم أموالهم، وأسس دولة استمرت لفترة.</li>
                        </ul>
                    </div>

                    <div class="caliph-card border-l-4 border-l-gray-500">
                        <div class="item-title text-gray-800">6. وثبات واضطرابات أخرى</div>
                        <ul class="list-disc list-inside mt-2 text-secondary text-sm space-y-1">
                            <li><strong>الأردن:</strong> ثورة رجل من قبيلة "لخم".</li>
                            <li><strong>حمص:</strong> وثبة الأهالي بالعامل "كيدر الأشروسني" وطرده.</li>
                            <li><strong>سامراء:</strong> شغب الجند (الأتراك) وضربهم للقائد "لاوتاش".</li>
                            <li><strong>المعرة:</strong> وثبة "يوسف بن إبراهيم التنوخي" (القصيص).</li>
                            <li><strong>الخوارج:</strong> خروج "مساور الخارجي" (من بني زهير)، قاتله "الحسن بن أيوب" فقتله وقطع رأسه وأرسله لسامراء.</li>
                        </ul>
                    </div>

                </div>
            </div>
        `
    },
    
	{
        id: "timeline",
        title: "السجل الزمني الدقيق وشامل",
        subtitle: "من ولادة الهادي (ع) إلى الغيبة الكبرى",
        icon: "📅",
        type: "custom-html",
        content: `
            <div class="tree-section grid-responsive">
                
                <div class="caliph-card mb-4 border-r-4 border-green-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-green-800">ولادة النور</h3>
                        <span class="badge badge-green">212 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        ولادة الإمام علي بن محمد الهادي (عليه السلام) في شهر ذي الحجة في صريا بالمدينة المنورة.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-green-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-green-800">بداية الإمامة المبكرة</h3>
                        <span class="badge badge-green">220 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        <ul class='list-disc list-inside space-y-1'>
                            <li>استشهاد الإمام محمد الجواد (عليه السلام) مسموماً بأمر المعتصم العباسي.</li>
                            <li>تولي الإمام علي الهادي (عليه السلام) الإمامة وهو في الثامنة من عمره.</li>
                        </ul>
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-gray-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-gray-800">هلاك المعتصم</h3>
                        <span class="badge badge-gray">227 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        نهاية حكم المعتصم العباسي (218-227 هـ).
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-purple-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-purple-800">تصعيد فتنة خلق القرآن</h3>
                        <span class="badge badge-purple">231 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        <ul class='list-disc list-inside space-y-1'>
                            <li>قتل الواثق ل<span class='badge badge-green'>أحمد بن نصر الخزاعي</span>.</li>
                            <li>موت أبي يعقوب البوطي في السجن.</li>
                        </ul>
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-blue-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-blue-800">أحداث مفصلية كبرى</h3>
                        <span class="badge badge-blue">232 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        <strong>ولادة الإمام الحسن العسكري (عليه السلام)</strong>. هلاك الواثق وتولي المتوكل.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-red-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-red-800">حادثة الإشخاص القسري</h3>
                        <span class="badge badge-red">234 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        إشخاص الإمام الهادي إلى سامراء بأمر المتوكل ونزوله في خان الصعاليك.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-gray-600">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-gray-800">هلاك المتوكل</h3>
                        <span class="badge badge-gray">247 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        قتل المتوكل (بعد دعاء الإمام بـ3 أيام). تولي المنتصر.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-gray-400">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-gray-700">وفاة المنتصر</h3>
                        <span class="badge badge-gray">248 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        وفاة المنتصر (مسموماً). تولي المستعين.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-yellow-500 bg-yellow-50">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-yellow-800">وفاة السيد محمد (سبع الدجيل)</h3>
                        <span class="badge badge-yellow">252 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        وفاة السيد محمد بن الإمام الهادي في (بلد)، وتأكيد النص على الحسن العسكري.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-red-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-red-800">تولي المعتز</h3>
                        <span class="badge badge-red">252 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        خلع المستعين وقتله. تولي المعتز.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-green-600">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-green-900">استشهاد الإمام الهادي (ع)</h3>
                        <span class="badge badge-green">254 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        استشهاد الإمام الهادي مسموماً. بداية إمامة الحسن العسكري (ع).
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-blue-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-blue-800">ولادة المهدي (عج) ومقتل المعتز</h3>
                        <span class="badge badge-blue">255 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        <strong>ولادة الإمام المهدي</strong> سراً. قتل المعتز عطشاً وتولي المهتدي.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-orange-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-orange-800">قتل المهتدي وثورة الزنج</h3>
                        <span class="badge badge-orange">256 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        مقتل المهتدي (عصراً). تولي المعتمد. اندلاع ثورة الزنج.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-red-600">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-red-900">استشهاد العسكري (ع)</h3>
                        <span class="badge badge-red">260 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        استشهاد الإمام العسكري مسموماً. بداية <strong>الغيبة الصغرى</strong>.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-gray-500">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-gray-700">نهاية الزنج وهلاك المعتمد</h3>
                        <span class="badge badge-gray">270 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        القضاء على ثورة الزنج وهلاك المعتمد.
                    </div>
                </div>

                <div class="caliph-card mb-4 border-r-4 border-black">
                    <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <h3 class="font-bold text-lg text-black">بداية الغيبة الكبرى</h3>
                        <span class="badge badge-gray">329 هـ</span>
                    </div>
                    <div class="text-secondary leading-relaxed">
                        وفاة السفير الرابع وبدء الغيبة الكبرى.
                    </div>
                </div>

            </div>
        `
    },
    {
        id: "admin",
        title: "الجهاز الإداري: السفراء، الوكلاء، والفقهاء",
        subtitle: "النيابة الخاصة والتمهيد للمرجعية",
        icon: "💎",
        type: "custom-html",
        content: `
            <div class="tree-section">
                <div class="safir-box">
                    <h3 class="text-center border-b border-yellow-500 pb-4 mb-6">⭐ السفراء الأربعة (الغيبة الصغرى)</h3>
                    <div class="grid-responsive">
                        <div class="caliph-card">
                            <div class="flex items-center mb-2"><span class="safir-number">1</span><h4 class="mr-2">عثمان بن سعيد العمري</h4></div>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>اللقب:</strong> <span class="badge badge-green">السمان</span>.</li>
                                <li><strong>التوثيق:</strong> قال الهادي: "العمري وابنه ثقتان".</li>
                            </ul>
                        </div>
                        <div class="caliph-card">
                            <div class="flex items-center mb-2"><span class="safir-number">2</span><h4 class="mr-2">محمد بن عثمان العمري</h4></div>
                            <ul class="list-disc list-inside space-y-1">
                                <li>نص عليه العسكري في حياته.</li>
                                <li>تولى السفارة قرابة 40 سنة.</li>
                            </ul>
                        </div>
                        <div class="caliph-card">
                            <div class="flex items-center mb-2"><span class="safir-number">3</span><h4 class="mr-2">الحسين بن روح النوبختي</h4></div>
                            <ul class="list-disc list-inside space-y-1">
                                <li>عُرف بالتقية الشديدة والحكمة.</li>
                            </ul>
                        </div>
                        <div class="caliph-card">
                            <div class="flex items-center mb-2"><span class="safir-number">4</span><h4 class="mr-2">علي بن محمد السمري</h4></div>
                            <ul class="list-disc list-inside space-y-1">
                                <li>المدة: 3 سنوات.</li>
                                <li>التوقيع الأخير: "فقد وقعت الغيبة التامة".</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="analysis-box p-6 mt-6">
                    <div class="flex justify-between items-center border-b border-color pb-2 mb-4">
                        <h4 class="font-bold text-lg">📜 مدرسة الفقهاء والرواة</h4>
                    </div>
                    <div class="grid-responsive">
                        <div><strong class="text-blue-600 block mb-1">من الوكلاء والثقات:</strong> داود بن الأسود، خيران الخادم، إبراهيم بن عبدة، علي بن جعفر الهمداني، أحمد بن إسحاق الأشعري.</div>
                        <div><strong class="text-green-600 block mb-1">من الفقهاء:</strong> محمد بن الحسن الصفار (صاحب بصائر الدرجات)، علي بن بابويه القمي.</div>
                    </div>
                    <div class="mt-6 pt-4 border-t-2 border-dashed border-gray-300 text-center">
                        <span class="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-bold text-lg border border-indigo-200">
                            📊 إحصائيات الرواة: (182) راوياً عن الهادي ، و (213) راوياً عن العسكري
                        </span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "timeline_footer",
        title: "تحليلات العصر والخصائص",
        subtitle: "ملخص لأهم سمات الفترة والتواريخ",
        icon: "📊",
        type: "custom-html",
        content: `
            <div class="grid-responsive mt-8">
                <div class="analysis-box" style="border-right-color: #eab308;">
                    <h4 class="font-bold text-lg mb-3">📝 ملاحظات مهمة</h4>
                    <ul class="list-disc list-inside space-y-2" style="color: var(--text-secondary);">
                        <li><strong>مدة إمامة الهادي (ع):</strong> 34 سنة (220-254 هـ).</li>
                        <li><strong>مدة إمامة العسكري (ع):</strong> 6 سنوات (254-260 هـ) - الأقصر.</li>
                        <li><strong>مدة الغيبة الصغرى:</strong> 69 سنة (260-329 هـ).</li>
                        <li>عدد الخلفاء العباسيين في عهد الإمام الهادي: 6 خلفاء.</li>
                        <li>عدد الخلفاء العباسيين في عهد الإمام العسكري: 3 خلفاء.</li>
                    </ul>
                </div>
                <div class="analysis-box" style="border-right-color: #ef4444;">
                    <h4 class="font-bold text-lg mb-3">⚙️ خصائص العصر العباسي الثاني (232-329 هـ)</h4>
                    <ul class="list-disc list-inside space-y-2" style="color: var(--text-secondary);">
                        <li>سيطرة <strong>الأتراك</strong> الكاملة وتحول الخلفاء لدمى بيدهم.</li>
                        <li>كثرة خلع وقتل الخلفاء (المتوكل، المنتصر، المستعين، المعتز، المهتدي).</li>
                        <li>انتشار اللهو والمجون واضطهاد شديد للعلويين.</li>
                        <li>بداية ظهور الدويلات المستقلة (الطولونية، الصفارية، السامانية).</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: "loyalists",
        title: "رجال الحق: موالون لأهل البيت (ع)",
        subtitle: "الأسرة العلوية، السفراء، والثقات المقربون",
        icon: "🌹",
        type: "custom-html",
        content: `
            <div class="tree-section">
                
                <div class="mb-8">
                    <h3 class="text-green-800 border-b-2 border-green-200 pb-2 mb-4 flex items-center gap-2">
                        <span class="text-xl">🌿</span> الدائرة الأولى: العائلة العلوية
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <div class="caliph-card border-r-4 border-yellow-500 bg-yellow-50">
                            <h4 class="font-bold text-yellow-800">السيد محمد (سبع الدجيل)</h4>
                            <p class="text-sm text-secondary mt-1">توفي في حياة أبيه الهادي، وكان عظيم الشأن حتى ظن الناس أنه الإمام.</p>
                        </div>

                        <div class="caliph-card border-r-4 border-green-500">
                            <h4 class="font-bold text-green-800">موسى بن الإمام الجواد</h4>
                            <p class="text-sm text-secondary mt-1">أخو الإمام الهادي، واجهه يحيى بن أكثم بالأسئلة وكان عالماً ورعاً.</p>
                        </div>

                        <div class="caliph-card border-r-4 border-pink-500">
                            <h4 class="font-bold text-pink-800">السيدة حكيمة بنت الجواد</h4>
                            <p class="text-sm text-secondary mt-1">عمة الإمام العسكري، المستودعة للأسرار، وشاهدة ولادة الإمام المهدي (عج).</p>
                        </div>

                        <div class="caliph-card border-r-4 border-pink-500">
                            <h4 class="font-bold text-pink-800">السيدة سوسن (أم العسكري)</h4>
                            <p class="text-sm text-secondary mt-1">أخبرها الإمام بوفاته وطمأنها، كانت مفزعاً للشيعة بعد وفاته.</p>
                        </div>

                        <div class="caliph-card border-r-4 border-red-400 opacity-75">
                            <div class="flex justify-between">
                                <h4 class="font-bold text-red-800">جعفر بن علي (الكذاب)</h4>
                                <span class="badge badge-red">مذموم</span>
                            </div>
                            <p class="text-sm text-secondary mt-1">نازع المهدي في الصلاة، ووشى بمرض أخيه للسلطة طمعاً في الميراث.</p>
                        </div>

                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-blue-800 border-b-2 border-blue-200 pb-2 mb-4 flex items-center gap-2">
                        <span class="text-xl">💎</span> السفراء والخاصة
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        
                        <div class="caliph-card border-t-4 border-blue-500">
                            <h4 class="font-bold">عثمان بن سعيد العمري</h4>
                            <p class="text-xs text-secondary">السمان (الزيَّات)، وكيل الهادي والعسكري، وأول السفراء.</p>
                        </div>

                        <div class="caliph-card border-t-4 border-blue-500">
                            <h4 class="font-bold">محمد بن عثمان العمري</h4>
                            <p class="text-xs text-secondary">السفير الثاني، وثقه العسكري ونص عليه أبوه.</p>
                        </div>

                        <div class="caliph-card border-t-4 border-green-600">
                            <h4 class="font-bold">أبو هاشم الجعفري</h4>
                            <p class="text-xs text-secondary">من سلالة جعفر الطيار، خدم الهادي والعسكري، روى حديث البداء.</p>
                        </div>

                        <div class="caliph-card border-t-4 border-green-600">
                            <h4 class="font-bold">عبد العظيم الحسني</h4>
                            <p class="text-xs text-secondary">عرض دينه على الإمام الهادي فأقره، مدفون بالري (شاه عبد العظيم).</p>
                        </div>

                        <div class="caliph-card border-t-4 border-green-600">
                            <h4 class="font-bold">علي بن مهزيار</h4>
                            <p class="text-xs text-secondary">من كبار الفقهاء، سأل الهادي عن الخليفة من بعده.</p>
                        </div>

                        <div class="caliph-card border-t-4 border-green-600">
                            <h4 class="font-bold">الجنيدي (المعلم)</h4>
                            <p class="text-xs text-secondary">النواصب، تحول للولاء لما رأى من علم الإمام الهادي الصبي.</p>
                        </div>

                    </div>
                </div>

                <div>
                    <h3 class="text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">📜 سجل الوكلاء والرواة</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">أحمد بن إسحاق الأشعري:</strong> رأى الإمام المهدي ونطق أمامه بلسان عربي.
                        </div>
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">خيران الخادم:</strong> صاحب السر، أخبره الهادي بموت الواثق وتولي المتوكل.
                        </div>
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">محمد بن الفرج الرفجي:</strong> حذره الهادي من الخطر فاحتاط، وسجن 8 سنين.
                        </div>
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">الصقر بن أبي دلف:</strong> زار الهادي في سجن المتوكل وسأله عن القائم.
                        </div>
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">علي بن الحسين ابن بابويه القمي: (الصدوق الأول)</strong> والد الصدوق، خصه العسكري برسالة ووصية طويلة.
                        </div>
                         <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">محمد بن الحسن الصفار:</strong> صاحب (بصائر الدرجات)، من أصحاب العسكري.
                        </div>
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">داود بن الأسود:</strong> ناقل البريد السري (الخشبة) بأمر الإمام العسكري.
                        </div>
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">كامل بن إبراهيم:</strong> سأله المهدي (عج) عن حديث "لا يدخل الجنة" وهو صبي.
                        </div>
                         <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">سيف بن الليث:</strong> تظلم للمهتدي، وساعده الإمام العسكري في استرداد ضيعته.
                        </div>
                        <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                            <strong class="text-indigo-700">شاهوية بن عبد الله:</strong> كاتب الإمام الهادي بعد وفاة ابنه محمد.
                        </div>
                    </div>
                </div>

            </div>
        `
    },
    {
        id: "abbasid_loyalists",
        title: "رجال السلطة: موالون لبني العباس",
        subtitle: "الولاة، القادة الأتراك، والقضاة",
        icon: "🗡️",
        type: "custom-html",
        content: `
            <div class="tree-section">
                
                <div class="mb-6">
                    <h3 class="text-red-800 font-bold mb-3 bg-red-50 p-2 rounded">💂 القادة الأتراك (صناع القرار الحقيقيون)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        
                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">1. باغر التركي</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> قائد الهجوم على المتوكل.<br><strong>دوره:</strong> حرّضه "المنتصر" على قتل أبيه.<br><strong>التفاصيل:</strong> هجم مع 5 من الأتراك على المتوكل وسقط مخه من الضرب.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-gray-600">
                            <h4 class="font-bold">2. وصيف (التركي)</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> رأس النفوذ التركي (مع بغا).<br><strong>دوره:</strong> التحكم الكامل بالخلفاء.<br><strong>التفاصيل:</strong> "المستعين" كان في قفص بينه وبين بغا.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-gray-600">
                            <h4 class="font-bold">3. بغا (التركي)</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> شريك وصيف في القيادة.<br><strong>دوره:</strong> التحكم بمفاصل الدولة والخليفة المستعين.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">4. صالح بن وصيف</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> ابن القائد وصيف.<br><strong>دوره:</strong> شارك في خلع "المعتز" وسجن الإمام العسكري (ع).</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">5. سعيد بن صالح (الحاجب)</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> قائد ومنفذ اغتيالات.<br><strong>دوره:</strong> ذبح الخليفة "المستعين" وأرسل رأسه للمعتز وهو يلعب الشطرنج.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-orange-500">
                            <h4 class="font-bold">6. بكيال (التركي)</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> قائد تركي نافذ.<br><strong>دوره:</strong> كشف خطة "المهتدي" لقتل القادة.<br><strong>التفاصيل:</strong> قتله المهتدي، ففجرت وفاته ثورة الجند.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">7. يارجور</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> قائد فرقة الاغتيال.<br><strong>دوره:</strong> قتل الخليفة المهتدي بالله.<br><strong>التفاصيل:</strong> قتله "عصراً" (عصروا خصيتيه حتى مات).</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">8. كيجور التركي</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> قائد عسكري ميداني.<br><strong>دوره:</strong> القضاء على الثورات العلوية (هزم وقتل علي بن زيد).</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-orange-500">
                            <h4 class="font-bold">9. كيدر الأشروسني</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> عامل (والي) حمص.<br><strong>دوره:</strong> حكم بسيرة سيئة.<br><strong>التفاصيل:</strong> طرده أهالي حمص لظلمه.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-gray-400">
                            <h4 class="font-bold">10. لاوتاش</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> قائد عسكري في سامراء.<br><strong>دوره:</strong> ضحية لتمرد الجند (تعرض للضرب والإهانة).</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-green-600">
                            <h4 class="font-bold">11. أحمد بن طولون</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> مؤسس الدولة الطولونية.<br><strong>دوره:</strong> رفض قتل "المستعين" وهزم حركة "ابن الصوفي".</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">12. نحرير</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> سجّان غليظ.<br><strong>دوره:</strong> رمى الإمام العسكري في "بركة السباع" لتأكله فخضعت له.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">13. يحيى بن قتيبة</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> مسؤول سجن.<br><strong>دوره:</strong> ضيق على الإمام العسكري ورماه للسباع (قد يكون نفس الشخص نحرير).</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-gray-400">
                            <h4 class="font-bold">14. الشاه بن مكيال</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> قائد جيش.<br><strong>دوره:</strong> الفشل العسكري (هزمه الثائر علي بن زيد).</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">15. علي بن جرين</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> سجّان.<br><strong>دوره:</strong> سجن الإمام العسكري في عهد المعتمد.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-red-600">
                            <h4 class="font-bold">16. شفيع الخادم</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> متنفذ.<br><strong>دوره:</strong> غصب ضيعة لسيف بن الليث فاستردها الإمام العسكري.</p>
                        </div>

                        <div class="caliph-card border-l-4 border-l-gray-600">
                            <h4 class="font-bold">17. زرافة</h4>
                            <p class="text-sm mt-1"><strong>صفته:</strong> حاجب المتوكل.<br><strong>التفاصيل:</strong> مسؤول الحماية وتنظيم الدخول على الخليفة.</p>
                        </div>

                    </div>
                </div>

                <div class="mb-6">
                    <h3 class="text-gray-800 font-bold mb-3 bg-gray-100 p-2 rounded">⚖️ الوزراء والولاة والقضاة</h3>
                    <div class="grid-responsive">
                        
                        <div class="analysis-box border-gray-400">
                            <h4 class="text-red-700 font-bold mb-2">معادون لأهل البيت:</h4>
                            <ul class="list-disc list-inside text-sm space-y-2">
                                <li><strong>يحيى بن أكثم:</strong> قاضي القضاة، حاول مراراً إحراج الإمام الهادي والجواد بأسئلة تعجيزية وفشل.</li>
                                <li><strong>بُريحة العباسي:</strong> إمام الحرمين، صاحب الوشاية الكبرى التي أدت لنفي الإمام الهادي لسامراء.</li>
                                <li><strong>عبد الله بن محمد:</strong> والي المدينة، عزل بسبب شدة أذيته للإمام الهادي.</li>
                                <li><strong>أحمد بن أبي داود:</strong> القاضي المحرض للواثق في فتنة خلق القرآن، صادر أموال الناس.</li>
								<li><strong>أحمد بن أبي داود:</strong> القاضي المحرض للواثق في فتنة خلق القرآن، صادر أموال الناس.</li>
								<li><strong>القاضي ابن أبي الشوارب:</strong> القاضي الذي شهد بخلع المعتز، وأعاد الضيعة لسيف بن الليث في عهد المهتدي.</li>

                            </ul>
                        </div>

                        <div class="analysis-box border-green-400">
                            <h4 class="text-green-800 font-bold mb-2">مواقف إيجابية أو معتدلة:</h4>
                            <ul class="list-disc list-inside text-sm space-y-2">
                                <li><strong>يحيى بن هرثمة:</strong> قائد الجيش المكلف بنقل الهادي، تحول احتقاره للإمام إلى إجلال لما رأى عبادته.</li>
                                <li><strong>أحمد بن طولون:</strong> مؤسس الدولة الطولونية، رفض قتل المستعين، وكان يحترم أهل البيت نسبياً.</li>
                                <li><strong>محمد بن الفضل:</strong> والي المدينة (بديل عبد الله)، أمره المتوكل بإكرام الإمام الهادي.</li>
                                <li><strong>علي بن الحسين بن إسماعيل:</strong> والي المدينة للمنتصر، أوصاه الخليفة بالإحسان للعلويين.</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div class="bg-red-50 p-3 rounded border border-red-200">
                        <strong class="block text-red-800">ابن طيفور (الطبيب):</strong><br> المرتشي الذي فصد المنتصر بمبضع مسموم.
                    </div>
                    <div class="bg-gray-50 p-3 rounded border border-gray-200">
                        <strong class="block text-gray-800">الفتح بن خاقان:</strong><br> وزير المتوكل الأديب، قتل معه في نفس الليلة.
                    </div>
                     <div class="bg-gray-50 p-3 rounded border border-gray-200">
                        <strong class="block text-gray-800">ابن الزيات:</strong><br> وزير الزيت، صنع تنوراً للتعذيب ومات فيه.
                    </div>
                </div>

            </div>
        `
    },
    {
        id: "general_figures",
        title: "تيارات وشخصيات عامة",
        subtitle: "فلاسفة، غلاة، ومتمردون",
        icon: "🌍",
        type: "custom-html",
        content: `
            <div class="tree-section grid-responsive">
                
                <div class="caliph-card border-l-4 border-l-red-600">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xl">🚫</span> <h3 class="font-bold text-red-800">الغلاة والمدّعون (الفرق الضالة)</h3>
                    </div>
                    <ul class="list-disc list-inside text-sm text-secondary space-y-2">
                        <li><strong>علي بن حسكة:</strong> ادعى النبوة وتأليه الإمام، لعنه الهادي وأمر "بخدش رأسه" (قتله).</li>
                        <li><strong>القاسم اليقطيني:</strong> من رؤوس الغلاة والمفوضة، طرده الأئمة.</li>
                        <li><strong>فارس بن حاتم:</strong> كذب على الإمام وأكل أموال الناس، أمر الهادي بقتله وضمن للقاتل الجنة.</li>
                        <li><strong>الراهب المسيحي:</strong> صاحب خدعة "العظم" الذي استسقى به، كشفه العسكري وأنقذ عقيدة الناس.</li>
                    </ul>
                </div>

                <div class="caliph-card border-l-4 border-l-blue-600">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xl">📚</span> <h3 class="font-bold text-blue-800">فلاسفة وأدباء</h3>
                    </div>
                     <ul class="list-disc list-inside text-sm text-secondary space-y-2">
                        <li><strong>الكندي (الفيلسوف):</strong> أراد تأليف "تناقض القرآن"، أرسل له العسكري تلميذاً بسؤال واحد جعله يحرق كتابه.</li>
                        <li><strong>الجاحظ:</strong> الأديب الشهير، عاصر الفترة ووصف الأتراك بـ "أعراب العجم".</li>
                        <li><strong>الجماني:</strong> شاعر سأله المتوكل "من أشعر الناس؟" فقال "أنا وأنت وشاعر في الجاهلية".</li>
                        <li>
                            <strong>يزيد المهلبي:</strong> مدح المنتصر لإحسانه للعلويين، ورد فدك، ورفع المنع عن زيارة الحسين (ع). قال فيه:
                            <div class="special-quote mt-1 text-xs leading-relaxed text-center">
                                "ولقد بررت الطالبية بعدما *** دموا زماناً بعدها وزمانا<br>
                                ورددت إلفة هاشم فرأيتهم *** بعد العداوة بينهم إخوانا"
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="caliph-card border-l-4 border-l-orange-500 md:col-span-2">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xl">🔥</span> <h3 class="font-bold text-orange-800">قادة الثورات والتمرد</h3>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-2">
                        <div class="bg-orange-50 p-2 rounded">
                            <strong>صاحب الزنج (علي بن محمد):</strong> قائد أشرس ثورة، تبرأ منه الإمام العسكري وقال "ليس منا".
                        </div>
                        <div class="bg-orange-50 p-2 rounded">
                            <strong>يحيى بن عمر:</strong> ثار بالكوفة بشعار "الرضا من آل محمد"، قُتل وبكاه الناس لعدله.
                        </div>
                        <div class="bg-orange-50 p-2 rounded">
                            <strong>أحمد بن نصر الخزاعي:</strong> قتله الواثق بيده وصلبه لأنه أصر أن القرآن غير مخلوق (أهل الحديث).
                        </div>
                        <div class="bg-orange-50 p-2 rounded">
                            <strong>ابن الصوفي:</strong> علوي ثار في مصر وهزمه ابن طولون.
                        </div>
                    </div>
                </div>

            </div>
        `
    }
];