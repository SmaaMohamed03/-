import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Clock, MapPin, X, Info, Tv, Handshake, ChevronDown, Trophy, Users, Store, BarChart, Layout, Youtube, Instagram, Facebook, Smartphone, Target, TrendingUp, Zap, User, Image, Activity, PieChart, Eye, Heart, Briefcase, Calendar, DollarSign, Megaphone, CheckCircle2, Compass, Layers, MessageCircle, Filter, Download, Loader2 } from 'lucide-react';
import { episodes, Episode } from './data/episodes';

export default function App() {
  const [activeTab, setActiveTab] = useState<'program' | 'analysis' | 'about' | 'gallery' | 'pitch' | 'strategy'>('program');
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [expandedPartnerIdx, setExpandedPartnerIdx] = useState<number | null>(null);

  const handleCloseModal = () => {
    setSelectedEpisode(null);
    setExpandedPartnerIdx(null);
  };

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
    setExpandedPartnerIdx(null);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30" dir="rtl">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Tv className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="font-bold text-lg tracking-tight">يلا نجرب</span>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-4 bg-zinc-900/50 p-1 rounded-xl border border-zinc-800 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'about' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">من هو محمود؟</span>
              <span className="sm:hidden">محمود</span>
            </button>
            <button
              onClick={() => setActiveTab('program')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'program' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span className="hidden sm:inline">حلقات البرنامج</span>
              <span className="sm:hidden">البرنامج</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'gallery' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">معرض الصور</span>
              <span className="sm:hidden">الصور</span>
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'analysis' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <BarChart className="w-4 h-4" />
              <span className="hidden sm:inline">تحليل صانع المحتوى</span>
              <span className="sm:hidden">التحليل</span>
            </button>
            <button
              onClick={() => setActiveTab('pitch')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'pitch' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">خطة العمل</span>
              <span className="sm:hidden">الخطة</span>
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'strategy' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">استراتيجية المحتوى</span>
              <span className="sm:hidden">الاستراتيجية</span>
            </button>
          </div>
        </div>
      </nav>

      {activeTab === 'program' && (
        <motion.div
          key="program-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header / Hero */}
          <header className="relative overflow-hidden border-b border-zinc-800/50 bg-zinc-900/50">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-950 to-zinc-950"></div>
            <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20"
              >
                <Tv className="w-4 h-4" />
                <span>برنامج في الشارع</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-600 mb-6"
              >
                يلا نجرب
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-8"
              >
                برنامج يلا نجرب مع محمود يوسف.. 10 حلقات من قلب الشارع بنسلط فيها الضوء على حياة وتحديات ذوي الإعاقة الحركية (مستخدمي الكراسي المتحركة) بشكل عفوي، كوميدي، وتوعوي.
              </motion.p>
            </div>
          </header>

          {/* Episodes Grid */}
          <main className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {episodes.map((episode, index) => (
                <motion.div
                  key={episode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => handleEpisodeClick(episode)}
                  className="group relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-amber-500/50 transition-colors flex flex-col"
                >
                  <div className="aspect-video relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                    <img 
                      src={episode.image} 
                      alt={episode.title}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />
                    
                    {/* Cover Text Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end pointer-events-none">
                      <h4 className="text-white font-black text-lg sm:text-xl leading-tight drop-shadow-lg mb-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 whitespace-pre-line">
                        {episode.coverText}
                      </h4>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-zinc-300 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {episode.duration}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-zinc-950 shadow-lg shadow-amber-500/20 transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-amber-500 text-xs font-bold tracking-wider">
                        الحلقة {episode.id}
                      </div>
                      {episode.partners && episode.partners.length > 0 && (
                        <div className="flex items-center gap-1 text-[10px] text-zinc-400 bg-zinc-800/50 px-2 py-0.5 rounded-full border border-zinc-700/50">
                          <Handshake className="w-3 h-3 text-amber-500/70" />
                          <span>{episode.partners.length} شريك مقترح</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-100 mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-2 mt-auto">
                      {episode.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </motion.div>
      )}

      {activeTab === 'analysis' && (
        <motion.div
          key="analysis-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto px-6 py-16"
        >
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20"
            >
              <BarChart className="w-10 h-10 text-zinc-950" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6">
              استراتيجيتك كصانع محتوى
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              رؤيتك واستراتيجيتك في التواجد الرقمي، وإزاي بتسعى لبناء مجتمع واعي ومؤثر.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="https://www.instagram.com/mahmoud.youssuf?igsh=MTNmaDg4MjBwdmk2eQ==" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-pink-500/50 rounded-xl transition-all text-zinc-300 hover:text-pink-500">
                <Instagram className="w-5 h-5" />
                <span className="font-medium">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@mahmoudyoussuf?_r=1&_t=ZS-94Pn3Pwd4xo" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/50 rounded-xl transition-all text-zinc-300 hover:text-cyan-500">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">TikTok</span>
              </a>
              <a href="https://youtube.com/@mahmoud.youssuf?si=igtPSsvwCW-wlkhP" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 rounded-xl transition-all text-zinc-300 hover:text-red-500">
                <Youtube className="w-5 h-5" />
                <span className="font-medium">YouTube</span>
              </a>
              <a href="https://www.facebook.com/share/1hubC8r5YN/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-blue-500/50 rounded-xl transition-all text-zinc-300 hover:text-blue-500">
                <Facebook className="w-5 h-5" />
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20">
                <Target className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">هويتك في المحتوى</h3>
              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span><strong className="text-zinc-200">كاسر الجليد:</strong> بتحاول دايماً تكسر حاجز الخجل عند الناس في التعامل مع ذوي الإعاقة. بتروح للناس، بتهزر معاهم، وبتقولهم "اسألوا متتكسفوش" عشان تخلق حالة من الراحة النفسية للمشاهد.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span><strong className="text-zinc-200">التجربة العملية:</strong> مش بتحب تدي مواعظ قدام الكاميرا. بتنزل الشارع، وبتخلي الناس تعيش التجربة بنفسها، لأن الرسالة بتوصل أسرع وأقوى بالفعل مش بالكلام.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: SWOT Analysis */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors md:col-span-2">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 border border-amber-500/20">
                <TrendingUp className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">استراتيجيتك على السوشيال ميديا</h3>
              <p className="text-zinc-400 mb-8">إزاي بتستفيد من كل منصة عشان توصل رسالتك لأكبر عدد من الناس.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* TikTok SWOT */}
                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="w-6 h-6 text-cyan-500" />
                    <h4 className="text-xl font-bold text-zinc-100">تيك توك (TikTok)</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2"><span className="text-emerald-500 font-bold w-4">S</span><p className="text-zinc-300"><strong className="text-zinc-100">نقاط القوة:</strong> بتستخدمه عشان توصل للشباب (Gen Z) بسرعة وبطريقة عفوية وكوميدية.</p></div>
                    <div className="flex gap-2"><span className="text-red-500 font-bold w-4">W</span><p className="text-zinc-300"><strong className="text-zinc-100">التحديات:</strong> المحتوى بيتحرق بسرعة وانتباه المشاهد قصير جداً.</p></div>
                    <div className="flex gap-2"><span className="text-blue-500 font-bold w-4">O</span><p className="text-zinc-300"><strong className="text-zinc-100">الفرص:</strong> فرصة ممتازة عشان تشارك في التريندات وتدمج رسالتك فيها بشكل ذكي.</p></div>
                    <div className="flex gap-2"><span className="text-amber-500 font-bold w-4">T</span><p className="text-zinc-300"><strong className="text-zinc-100">المخاطر:</strong> تغير الخوارزميات المستمر بيحتاج منك تكون دايماً متابع ومواكب.</p></div>
                  </div>
                </div>

                {/* Instagram SWOT */}
                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Instagram className="w-6 h-6 text-pink-500" />
                    <h4 className="text-xl font-bold text-zinc-100">إنستجرام (Instagram)</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2"><span className="text-emerald-500 font-bold w-4">S</span><p className="text-zinc-300"><strong className="text-zinc-100">نقاط القوة:</strong> المنصة الأساسية لبناء علاقة شخصية مع المتابعين من خلال الـ Stories والـ Reels.</p></div>
                    <div className="flex gap-2"><span className="text-red-500 font-bold w-4">W</span><p className="text-zinc-300"><strong className="text-zinc-100">التحديات:</strong> بتحتاج جودة تصوير عالية ومجهود أكبر في الإنتاج والمظهر.</p></div>
                    <div className="flex gap-2"><span className="text-blue-500 font-bold w-4">O</span><p className="text-zinc-300"><strong className="text-zinc-100">الفرص:</strong> فرصة للتعاون (Collab) مع صناع محتوى تانيين وتوسيع دايرة التأثير.</p></div>
                    <div className="flex gap-2"><span className="text-amber-500 font-bold w-4">T</span><p className="text-zinc-300"><strong className="text-zinc-100">المخاطر:</strong> المنافسة القوية بتحتم عليك تقديم محتوى مميز ومختلف دايماً.</p></div>
                  </div>
                </div>

                {/* Facebook SWOT */}
                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Facebook className="w-6 h-6 text-blue-500" />
                    <h4 className="text-xl font-bold text-zinc-100">فيسبوك (Facebook)</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2"><span className="text-emerald-500 font-bold w-4">S</span><p className="text-zinc-300"><strong className="text-zinc-100">نقاط القوة:</strong> أكبر قاعدة جماهيرية في مصر، وممتاز لبناء "مجتمع" حقيقي ومشاركة الفيديوهات الإنسانية.</p></div>
                    <div className="flex gap-2"><span className="text-red-500 font-bold w-4">W</span><p className="text-zinc-300"><strong className="text-zinc-100">التحديات:</strong> الوصول العضوي بيقل، والتعليقات السلبية أحياناً بتكون تحدي.</p></div>
                    <div className="flex gap-2"><span className="text-blue-500 font-bold w-4">O</span><p className="text-zinc-300"><strong className="text-zinc-100">الفرص:</strong> إنشاء "جروب" تفاعلي للمتابعين لمناقشة قضايا الإتاحة بشكل أعمق.</p></div>
                    <div className="flex gap-2"><span className="text-amber-500 font-bold w-4">T</span><p className="text-zinc-300"><strong className="text-zinc-100">المخاطر:</strong> سياسات فيسبوك الصارمة في تقييد الوصول.</p></div>
                  </div>
                </div>

                {/* YouTube SWOT */}
                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Youtube className="w-6 h-6 text-red-500" />
                    <h4 className="text-xl font-bold text-zinc-100">يوتيوب (YouTube)</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2"><span className="text-emerald-500 font-bold w-4">S</span><p className="text-zinc-300"><strong className="text-zinc-100">نقاط القوة:</strong> المكان الأفضل للفيديوهات الطويلة وبناء ولاء عميق مع المشاهدين، ومحرك بحث بيخلي الفيديوهات تعيش.</p></div>
                    <div className="flex gap-2"><span className="text-red-500 font-bold w-4">W</span><p className="text-zinc-300"><strong className="text-zinc-100">التحديات:</strong> بيحتاج مجهود كبير جداً في الإنتاج والمونتاج وبناء القاعدة بياخد وقت.</p></div>
                    <div className="flex gap-2"><span className="text-blue-500 font-bold w-4">O</span><p className="text-zinc-300"><strong className="text-zinc-100">الفرص:</strong> المكان المثالي لعرض حلقات "يلا نجرب" كاملة واستخدام الـ Shorts كتشويق.</p></div>
                    <div className="flex gap-2"><span className="text-amber-500 font-bold w-4">T</span><p className="text-zinc-300"><strong className="text-zinc-100">المخاطر:</strong> صعوبة المنافسة مع قنوات الإنتاج الضخم.</p></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors md:col-span-2">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">إيه اللي بيميز محتواك؟</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                رسالتك وهدفك
              </p>
              <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                <p className="text-zinc-300 leading-relaxed italic">
                  "بتقدم محتوى هادف وإنساني، بس في نفس الوقت دمه خفيف، حركي، ومليان طاقة. بتحاول تقدم الإلهام المغلف بالكوميديا عشان توصل لقلوب الناس قبل عقولهم، وتغير نظرة المجتمع للإعاقة بشكل عملي وممتع."
                </p>
              </div>
            </div>

            {/* Card 4: KPIs & Current Audience */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors md:col-span-2">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 border border-amber-500/20">
                <Activity className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">قاعدة الجماهير الحالية والأهداف المتوقعة (KPIs)</h3>
              <p className="text-zinc-400 mb-8">بناءً على متابعينك الحاليين، دي الأرقام والتأثير اللي بتطمح تحققه من خلال حلقات يلا نجرب.</p>
              
              {/* Current Audience Stats */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl px-4 py-3 flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <div>
                    <div className="text-xs text-zinc-500">إنستجرام</div>
                    <div className="font-bold text-zinc-200">9,069</div>
                  </div>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl px-4 py-3 flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-xs text-zinc-500">فيسبوك</div>
                    <div className="font-bold text-zinc-200">8,400</div>
                  </div>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl px-4 py-3 flex items-center gap-3">
                  <Youtube className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="text-xs text-zinc-500">يوتيوب</div>
                    <div className="font-bold text-zinc-200">7,950</div>
                  </div>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl px-4 py-3 flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-cyan-500" />
                  <div>
                    <div className="text-xs text-zinc-500">تيك توك</div>
                    <div className="font-bold text-zinc-200">306</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <Eye className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">الوصول (Reach)</h4>
                  <p className="text-sm text-zinc-400">بتطمح للوصول لـ 15,000 إلى 25,000 مشاهدة للحلقة الواحدة كبداية واقعية.</p>
                </div>

                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                    <Heart className="w-5 h-5 text-pink-500" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">التفاعل (Engagement)</h4>
                  <p className="text-sm text-zinc-400">بتستهدف تحقيق معدل تفاعل (Engagement Rate) بين 5% لـ 8%.</p>
                </div>

                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                    <PieChart className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">الاحتفاظ (Retention)</h4>
                  <p className="text-sm text-zinc-400">بتطمح للحفاظ على متوسط مدة مشاهدة يتجاوز 40% من مدة الحلقة.</p>
                </div>

                <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">التأثير المجتمعي</h4>
                  <p className="text-sm text-zinc-400">هدفك الأهم هو تلقي تعليقات إيجابية ومشاركة قصص ملهمة من المتابعين، وتغيير نظرة المجتمع بشكل حقيقي.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'about' && (
        <motion.div
          key="about-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto px-6 py-16"
        >
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20 overflow-hidden border-4 border-zinc-900"
            >
              <img src="https://i.postimg.cc/hnrTBCZd/FB-IMG-1738624160273.jpg" alt="محمود يوسف" className="w-full h-full object-cover" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6">
              من هو محمود يوسف؟
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
              محمود يوسف مش مجرد صانع محتوى، هو شاب مصري قرر يحول التحدي لفرصة. من خلال كرسيه المتحرك، بيلف شوارع مصر عشان يثبت إن الإعاقة مش نهاية المطاف، وإن الحياة مليانة تجارب تستحق تتعاش.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-amber-500" />
                الرسالة والهدف
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                هدف محمود الأساسي هو <strong>"كسر الجليد"</strong> بين المجتمع وذوي الإعاقة الحركية. بيحاول يغير النظرة النمطية من خلال تجارب حقيقية، كوميدية، وتوعوية في نفس الوقت.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                برنامج "يلا نجرب" هو خطوته الأولى عشان يقول لكل شخص بيستخدم كرسي متحرك: "الشارع بتاعك، وتقدر تعمل كل حاجة".
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-500" />
                ليه محمود مختلف؟
              </h3>
              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span><strong>العفوية:</strong> مفيش سكريبت معقد، كل حاجة بتحصل في الشارع بطبيعتها.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span><strong>التجربة العملية:</strong> مش بيدي نصايح، هو بينزل يجرب بنفسه ويخلي غيره يجرب.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-1">•</span>
                  <span><strong>الروح الإيجابية:</strong> بيحول أي موقف صعب لنكتة أو درس مستفاد بدون دراما.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'gallery' && (
        <motion.div
          key="gallery-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto px-6 py-16"
        >
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
              معرض الصور
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              لقطات من كواليس تصوير حلقات "يلا نجرب" وتجارب محمود في الشارع.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((placeholder) => (
              <div key={`gallery-placeholder-${placeholder}`} className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <div className="text-zinc-700 flex flex-col items-center gap-2">
                  <Image className="w-12 h-12 opacity-50" />
                  <span className="text-sm font-medium">قريباً</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'pitch' && (
        <motion.div
          key="pitch-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto px-6 py-16"
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
              خطة العمل والمشروع
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              نظرة شاملة على الجدول الزمني، الميزانية التقديرية، وخطة التسويق لبرنامج "يلا نجرب".
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline */}
            <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                <Calendar className="w-6 h-6 text-amber-500" />
                الجدول الزمني للتنفيذ
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                {[
                  { phase: 'المرحلة الأولى', title: 'التحضير وما قبل الإنتاج', desc: 'كتابة السكريبت، استخراج التصاريح، معاينة مواقع التصوير، والتنسيق مع الضيوف والشركاء المحتملين.' },
                  { phase: 'المرحلة الثانية', title: 'الإنتاج والتصوير', desc: 'تصوير الحلقات في مواقع مختلفة (مترو، مطاعم، شوارع، منشآت رياضية) بمعدل منتظم.' },
                  { phase: 'المرحلة الثالثة', title: 'المونتاج وما بعد الإنتاج', desc: 'تحرير الفيديو، إضافة المؤثرات البصرية والصوتية، تصميم الصور المصغرة (Thumbnails)، وتجهيز الحلقات للعرض.' },
                  { phase: 'المرحلة الرابعة', title: 'النشر والتسويق', desc: 'نشر الحلقات على منصات التواصل الاجتماعي، مع حملات إعلانية ممولة ومقاطع قصيرة (Reels/Shorts).' },
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-900 bg-amber-500 text-zinc-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-amber-500 font-bold text-sm">{item.phase}</span>
                      </div>
                      <h4 className="text-lg font-bold text-zinc-100 mb-2">{item.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Budget */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                  <PieChart className="w-6 h-6 text-amber-500" />
                  الميزانية التقديرية
                </h3>
                <div className="space-y-4">
                  {[
                    { item: 'معدات التصوير والصوت', percentage: 'يحدد لاحقاً' },
                    { item: 'أجور فريق العمل والمونتاج', percentage: 'يحدد لاحقاً' },
                    { item: 'التسويق والدعاية', percentage: 'يحدد لاحقاً' },
                    { item: 'الانتقالات واللوجستيات', percentage: 'يحدد لاحقاً' },
                    { item: 'مصروفات طوارئ', percentage: 'يحدد لاحقاً' },
                  ].map((budget, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-xl border border-zinc-700/30">
                      <span className="text-zinc-300 text-sm font-medium">{budget.item}</span>
                      <span className="text-zinc-500 font-bold bg-zinc-800/50 px-2 py-1 rounded-lg text-xs">{budget.percentage}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    * سيتم تحديد الأرقام والنسب النهائية بناءً على حجم الرعايات والشراكات الاستراتيجية.
                  </p>
                </div>
              </div>

              {/* Marketing Plan */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-amber-500 flex items-center gap-3 mb-6">
                  <Megaphone className="w-6 h-6" />
                  خطة التسويق
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-zinc-100 font-bold text-sm mb-1">إعلانات ممولة (Paid Ads)</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">استهداف دقيق على منصات تيك توك، إنستجرام، وفيسبوك للوصول للجمهور المهتم.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-zinc-100 font-bold text-sm mb-1">تعاون مع مؤثرين (Collabs)</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">استضافة مؤثرين وصناع محتوى في بعض الحلقات لزيادة الانتشار.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-zinc-100 font-bold text-sm mb-1">محتوى قصير (Shorts/Reels)</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">قص مقتطفات كوميدية ومؤثرة من الحلقات ونشرها بشكل يومي للحفاظ على التفاعل.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-zinc-100 font-bold text-sm mb-1">العلاقات العامة (PR)</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">التواصل مع المنصات الإخبارية والمجلات لتغطية فكرة البرنامج كأول برنامج من نوعه.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'strategy' && (
        <motion.div
          key="strategy-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto px-6 py-16"
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
              استراتيجية المحتوى
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              خارطة الطريق الشاملة لبرنامج "يلا نجرب" لضمان الوصول للجمهور المستهدف وتحقيق أهداف البرنامج.
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Buyer Persona */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-amber-500" />
                1. الجمهور المستهدف (Buyer Persona)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-amber-500 font-bold mb-3 text-lg">الشباب والجمهور العام</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    شباب من 16 لـ 35 سنة (Gen Z & Millennials)، بيحبوا برامج التحديات والمغامرات، بيتابعوا البلوجرز، وعندهم وعي مجتمعي وبيحبوا يدعموا القضايا الإنسانية في قالب ترفيهي.
                  </p>
                </div>
                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-amber-500 font-bold mb-3 text-lg">ذوي الإعاقة وعائلاتهم</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    بيدوروا على محتوى بيمثلهم بشكل قوي وإيجابي (بدون شفقة)، وبيدوروا على معلومات عملية زي (أماكن خروج مجهزة، عربيات مجهزة، إلخ).
                  </p>
                </div>
                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-amber-500 font-bold mb-3 text-lg">أصحاب الأعمال (B2B)</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    أصحاب المطاعم، الكافيهات، والشركات اللي البرنامج بيستهدفهم عشان يجهزوا أماكنهم، ودول شريحة مهمة جداً للرعايات (Sponsorships).
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Content Objectives */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-amber-500" />
                2. أهداف المحتوى (Content Objectives)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <Eye className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="text-zinc-100 font-bold">الوعي (Awareness)</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">تسليط الضوء على التحديات اليومية اللي بتواجه ذوي الإعاقة بطريقة عملية وتجربة حقيقية.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <Zap className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="text-zinc-100 font-bold">تغيير السلوك</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">تعليم الناس إتيكيت التعامل، وتغيير نظرة المجتمع من "الشفقة" لـ "الدمج والتمكين".</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <MessageCircle className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="text-zinc-100 font-bold">التفاعل والمجتمع</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">خلق مجتمع متفاعل بيشارك تجاربه، وبيطالب بحقوق الإتاحة في الأماكن العامة.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <Trophy className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="text-zinc-100 font-bold">التأثير الواقعي</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">تشجيع أصحاب الأماكن إنهم يعملوا (رامب) ويجهزوا أماكنهم لاستقبال كل الناس.</p>
                </div>
              </div>
            </div>

            {/* 3. USP & Positioning */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-amber-500 flex items-center gap-3 mb-6">
                <Compass className="w-6 h-6" />
                3. الميزة التنافسية والتموضع (USP & Positioning)
              </h3>
              <div className="space-y-6">
                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-zinc-100 font-bold mb-2 flex items-center gap-2">
                    <span className="text-amber-500">USP</span> الميزة التنافسية
                  </h4>
                  <p className="text-zinc-300 leading-relaxed italic">
                    "إحنا مش برنامج وثائقي كئيب بيطلب التعاطف، إحنا برنامج ترفيهي (تلفزيون واقع/تحديات)، بيحط المشاهير والبلوجرز في مكان ذوي الإعاقة عشان يعيشوا التجربة بجد، ويثبت إن الإعاقة الحقيقية في المكان مش في الإنسان."
                  </p>
                </div>
                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-zinc-100 font-bold mb-2 flex items-center gap-2">
                    <span className="text-amber-500">Positioning</span> التموضع
                  </h4>
                  <p className="text-zinc-300 leading-relaxed italic">
                    "البرنامج الترفيهي التوعوي الأول اللي بيحول قضايا الإتاحة لتحديات ممتعة، وبيخلي الدمج المجتمعي أسلوب حياة."
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Content Pillars & 5. Content Themes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                  <Layers className="w-6 h-6 text-amber-500" />
                  4. أعمدة المحتوى (Pillars)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-1">1.</span>
                    <div>
                      <strong className="text-zinc-100 block mb-1">الترفيه والتحدي</strong>
                      <span className="text-zinc-400 text-sm">المحتوى الأساسي: حلقات البرنامج، صدمة البلوجرز، المواقف الكوميدية والصعبة وقت التحدي.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-1">2.</span>
                    <div>
                      <strong className="text-zinc-100 block mb-1">التقييم والمراجعات</strong>
                      <span className="text-zinc-400 text-sm">تقييم الأماكن (مطاعم، نوادي، شوارع) من حيث الإتاحة (مجهز ولا لأ؟).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-1">3.</span>
                    <div>
                      <strong className="text-zinc-100 block mb-1">التوعية والإتيكيت</strong>
                      <span className="text-zinc-400 text-sm">معلومات سريعة عن إزاي نساعد صح، الكلمات اللي منقولهاش، وإزاي نتعامل بوعي.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-1">4.</span>
                    <div>
                      <strong className="text-zinc-100 block mb-1">قصص ملهمة وكواليس</strong>
                      <span className="text-zinc-400 text-sm">إبراز أبطال بيعملوا حاجات غير عادية، وكواليس تصوير الحلقات.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                  <Layout className="w-6 h-6 text-amber-500" />
                  5. مواضيع المحتوى (Themes)
                </h3>
                <div className="space-y-4">
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                    <h4 className="text-amber-500 font-bold text-sm mb-1">"حط نفسك مكاني" (In Their Shoes)</h4>
                    <p className="text-zinc-400 text-xs">ردود أفعال البلوجرز وهم بيجربوا الكرسي المتحرك أو بيغموا عينيهم.</p>
                  </div>
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                    <h4 className="text-amber-500 font-bold text-sm mb-1">"مكانك مجهز؟" (Is It Accessible?)</h4>
                    <p className="text-zinc-400 text-xs">ريفيوهات سريعة لأماكن الخروج ومدى إتاحتها.</p>
                  </div>
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                    <h4 className="text-amber-500 font-bold text-sm mb-1">"سؤال محرج" (Awkward Questions)</h4>
                    <p className="text-zinc-400 text-xs">الإجابة على الأسئلة اللي الناس بتتكسف تسألها لذوي الإعاقة.</p>
                  </div>
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                    <h4 className="text-amber-500 font-bold text-sm mb-1">"بطل مننا" (One of Us)</h4>
                    <p className="text-zinc-400 text-xs">تسليط الضوء على إنجازات حقيقية لذوي الإعاقة في الرياضة والشغل.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Content Format */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Image className="w-6 h-6 text-amber-500" />
                6. أشكال المحتوى (Content Format)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 text-center flex flex-col items-center justify-center gap-2">
                  <Tv className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-200 text-sm font-bold">فيديو طويل</span>
                  <span className="text-zinc-500 text-xs">حلقات يوتيوب</span>
                </div>
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 text-center flex flex-col items-center justify-center gap-2">
                  <Smartphone className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-200 text-sm font-bold">فيديو قصير</span>
                  <span className="text-zinc-500 text-xs">Reels & TikToks</span>
                </div>
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 text-center flex flex-col items-center justify-center gap-2">
                  <Layers className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-200 text-sm font-bold">Carousels</span>
                  <span className="text-zinc-500 text-xs">بوستات معلوماتية</span>
                </div>
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 text-center flex flex-col items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-200 text-sm font-bold">تفاعلي</span>
                  <span className="text-zinc-500 text-xs">Polls & Q&A</span>
                </div>
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 text-center flex flex-col items-center justify-center gap-2 col-span-2 md:col-span-1">
                  <Users className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-200 text-sm font-bold">UGC</span>
                  <span className="text-zinc-500 text-xs">محتوى المتابعين</span>
                </div>
              </div>
            </div>

            {/* 7. Content Distribution */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Megaphone className="w-6 h-6 text-amber-500" />
                7. قنوات التوزيع (Content Distribution)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                    <Smartphone className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-bold mb-1">TikTok & Instagram Reels</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">"ماكينة الانتشار" (Viral Engine). اللقطات الجذابة (Hooks) والمواقف المؤثرة أو المضحكة لجلب ملايين المشاهدات.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                    <Youtube className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-bold mb-1">YouTube</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">"البيت الأساسي" (Hub) للحلقات الطويلة بجودة عالية ومحرك البحث الدائم.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                    <Facebook className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-bold mb-1">Facebook</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">للوصول للعائلات والأعمار الأكبر، ومشاركة الفيديوهات الطويلة نسبياً والمقالات التوعوية.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-bold mb-1">LinkedIn</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">مهم جداً للرعايات (B2B)، لمخاطبة الشركات عن أهمية الإتاحة وشكر الرعاة.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                    <Handshake className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-bold mb-1">التعاونات (Collaborations)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">البلوجرز الضيوف بينزلوا (Teasers) أو مقاطع مشتركة (Collabs) على صفحاتهم للوصول لجمهورهم.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Content Creation Process */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-amber-500 flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6" />
                8. دورة حياة المحتوى (Content Creation Process)
              </h3>
              <div className="relative">
                <div className="absolute top-0 bottom-0 right-4 w-0.5 bg-amber-500/30"></div>
                <div className="space-y-6">
                  <div className="relative pr-10">
                    <div className="absolute right-2.5 top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-zinc-900"></div>
                    <h4 className="text-zinc-100 font-bold mb-1">1. العصف الذهني والبحث (Ideation)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">تحديد فكرة الحلقة، اختيار الضيف (إن وجد)، وتحديد المكان اللي هيتم تقييمه أو التصوير فيه بناءً على التريند أو طلبات الجمهور.</p>
                  </div>
                  <div className="relative pr-10">
                    <div className="absolute right-2.5 top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-zinc-900"></div>
                    <h4 className="text-zinc-100 font-bold mb-1">2. التحضير (Pre-production)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">كتابة الخطوط العريضة (Outline) مش سكريبت حرفي عشان نحافظ على العفوية، تجهيز المعدات، واستخراج التصاريح لو المكان محتاج.</p>
                  </div>
                  <div className="relative pr-10">
                    <div className="absolute right-2.5 top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-zinc-900"></div>
                    <h4 className="text-zinc-100 font-bold mb-1">3. التصوير (Production)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">النزول للشارع، تصوير التجربة الواقعية، التركيز على التقاط ردود الأفعال الحقيقية (B-roll & Reactions).</p>
                  </div>
                  <div className="relative pr-10">
                    <div className="absolute right-2.5 top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-zinc-900"></div>
                    <h4 className="text-zinc-100 font-bold mb-1">4. المونتاج (Post-production)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">تقطيع الفيديو الأساسي ليوتيوب، واستخراج 3-4 مقاطع قصيرة (Shorts/Reels) مع إضافة ترجمة نصية (Captions) ومؤثرات صوتية جذابة.</p>
                  </div>
                  <div className="relative pr-10">
                    <div className="absolute right-2.5 top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-zinc-900"></div>
                    <h4 className="text-zinc-100 font-bold mb-1">5. النشر والتحليل (Publishing & Analytics)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">نشر المحتوى في أوقات ذروة تفاعل الجمهور، ومتابعة الأرقام (Retention, Engagement) لتحسين الحلقات اللي بعدها.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Content Funnel */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Filter className="w-6 h-6 text-amber-500" />
                9. قمع المحتوى (The Content Funnel)
              </h3>
              <div className="flex flex-col gap-4">
                <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50 w-full">
                  <h4 className="text-amber-500 font-bold mb-1 flex items-center gap-2">
                    <span className="bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded text-xs">TOFU</span>
                    الوعي والانتشار (Awareness)
                  </h4>
                  <p className="text-zinc-400 text-sm">فيديوهات قصيرة (Reels/TikToks) سريعة، مضحكة أو صادمة لجذب انتباه جمهور جديد ميعرفش البرنامج.</p>
                </div>
                <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50 w-11/12 mx-auto">
                  <h4 className="text-amber-500 font-bold mb-1 flex items-center gap-2">
                    <span className="bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded text-xs">MOFU</span>
                    الاهتمام والارتباط (Consideration)
                  </h4>
                  <p className="text-zinc-400 text-sm">حلقات يوتيوب الطويلة، القصص الملهمة، والمحتوى التعليمي اللي بيبني علاقة وثيقة مع المتابع وبيخليه يهتم بالقضية.</p>
                </div>
                <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50 w-5/6 mx-auto">
                  <h4 className="text-amber-500 font-bold mb-1 flex items-center gap-2">
                    <span className="bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded text-xs">BOFU</span>
                    الولاء واتخاذ القرار (Action & Loyalty)
                  </h4>
                  <p className="text-zinc-400 text-sm">دعوة المتابعين للمشاركة في التحديات والمسابقات، استخدام الخصومات المقدمة من الرعاة (مطاعم، نوادي، مراكز غطس)، أو التفاعل مع مبادرة "صحح مفاهيمك" (Call to Action).</p>
                </div>
              </div>
            </div>

            {/* 10. KPIs */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-amber-500" />
                10. مؤشرات قياس الأداء (KPIs & Metrics)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-zinc-100 font-bold mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-cyan-500" />
                    الوصول والانتشار (Reach)
                  </h4>
                  <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside marker:text-zinc-700">
                    <li>عدد المشاهدات الكلية (Total Views)</li>
                    <li>معدل الوصول الفريد (Unique Reach)</li>
                    <li>نسبة الاحتفاظ بالجمهور (Retention Rate)</li>
                  </ul>
                </div>
                <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-zinc-100 font-bold mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    التفاعل (Engagement)
                  </h4>
                  <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside marker:text-zinc-700">
                    <li>معدل التفاعل (Engagement Rate)</li>
                    <li>عدد المشاركات والحفظ (Shares & Saves)</li>
                    <li>حجم المحتوى المُنتج من المستخدمين (UGC)</li>
                  </ul>
                </div>
                <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-zinc-100 font-bold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-500" />
                    نمو المجتمع (Community)
                  </h4>
                  <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside marker:text-zinc-700">
                    <li>زيادة عدد المشتركين/المتابعين</li>
                    <li>حجم المشاركة في التحديات والمسابقات</li>
                    <li>التفاعل في التعليقات والرسائل</li>
                  </ul>
                </div>
                <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-zinc-100 font-bold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    التأثير التجاري (Business Impact)
                  </h4>
                  <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside marker:text-zinc-700">
                    <li>عدد الرعاة والشركاء (B2B Leads)</li>
                    <li>عدد المتابعين اللي استخدموا خصومات الرعاة (Promo Codes)</li>
                    <li>التغطية الإعلامية (PR Mentions)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Episode Detail Modal */}
      <AnimatePresence>
        {selectedEpisode && activeTab === 'program' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto shadow-2xl shadow-black/50"
              >
                <div className="relative h-64 sm:h-80 shrink-0">
                  <img 
                    src={selectedEpisode.image} 
                    alt={selectedEpisode.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                  
                  <button 
                    onClick={handleCloseModal}
                    className="absolute top-4 left-4 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 right-6 left-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-amber-500 text-zinc-950 text-xs font-bold px-2 py-1 rounded">
                        الحلقة {selectedEpisode.id}
                      </span>
                      <div className="flex items-center gap-1 text-zinc-300 text-sm bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                        <Clock className="w-4 h-4 text-amber-500" />
                        {selectedEpisode.duration}
                      </div>
                      <div className="flex items-center gap-1 text-zinc-300 text-sm bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                        <MapPin className="w-4 h-4 text-amber-500" />
                        {selectedEpisode.location}
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-white">
                      {selectedEpisode.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                  <div className="flex items-start gap-4 mb-8 p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/50">
                    <Info className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                    <p className="text-zinc-300 leading-relaxed">
                      {selectedEpisode.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-6 bg-amber-500 rounded-full"></span>
                      محتوى الحلقة
                    </h3>
                    <p className="text-zinc-400 leading-loose text-lg">
                      {selectedEpisode.content}
                    </p>
                  </div>

                  {selectedEpisode.targetGuests && (
                    <div className="mt-8 p-6 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-amber-500" />
                        ضيوف مقترحين (بلوجرز)
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedEpisode.targetGuests.length > 0 ? (
                          selectedEpisode.targetGuests.map((guest, idx) => (
                            <span key={idx} className="bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full text-sm border border-zinc-700">
                              {guest}
                            </span>
                          ))
                        ) : (
                          <span className="text-zinc-500 text-sm italic">سيتم إضافة الأسماء لاحقاً...</span>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedEpisode.partners && selectedEpisode.partners.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-zinc-800/50">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                        <span className="w-2 h-6 bg-amber-500 rounded-full"></span>
                        شركاء الحلقة المقترحين
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {selectedEpisode.partners.map((partner, idx) => {
                          const isExpanded = expandedPartnerIdx === idx;
                          return (
                            <div 
                              key={idx} 
                              onClick={() => setExpandedPartnerIdx(isExpanded ? null : idx)}
                              className="group cursor-pointer bg-zinc-800/30 rounded-2xl border border-zinc-700/50 hover:bg-zinc-800/50 transition-all overflow-hidden"
                            >
                              <div className="flex items-center justify-between p-4">
                                <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/20">
                                    <Handshake className="w-6 h-6" />
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className="text-xs text-amber-500/80 font-medium">{partner.role}</div>
                                      {partner.isOptional && (
                                        <span className="text-[10px] bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded-full">اختياري</span>
                                      )}
                                    </div>
                                    <div className="font-bold text-zinc-100">
                                      {partner.name ? (
                                        partner.name
                                      ) : (
                                        <div className="flex items-center gap-1.5 text-zinc-500 text-sm italic">
                                          <Store className="w-4 h-4" />
                                          <span>سيتم إضافة اسم الشريك لاحقاً</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-zinc-500 group-hover:text-amber-500 transition-colors">
                                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </div>
                              </div>
                              
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <div className="px-4 pb-4 pt-2 border-t border-zinc-700/30 text-zinc-300 text-sm leading-relaxed">
                                      <div className="flex gap-2">
                                        <span className="text-amber-500">💡</span>
                                        <p>{partner.details}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {selectedEpisode.competition && (
                    <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                      <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2 mb-3">
                        <Trophy className="w-6 h-6" />
                        المسابقة
                      </h3>
                      <p className="text-zinc-300 leading-relaxed">
                        {selectedEpisode.competition}
                      </p>
                    </div>
                  )}

                  <div className="mt-10 pt-6 border-t border-zinc-800 flex justify-center">
                    <button className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-colors transform hover:scale-105 active:scale-95">
                      <Play className="w-5 h-5 fill-current" />
                      شاهد الحلقة كاملة
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
