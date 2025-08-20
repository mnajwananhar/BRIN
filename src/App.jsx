import React, { useState } from 'react';
import BrinHeader from './components/BrinHeader';
import HeroSection from './components/HeroSection';
import SentimentAnalyzer from './components/SentimentAnalyzer';
import { Brain, Car, Target, Database, TrendingUp, Zap, BookOpen, Users, Award, ChevronRight, BarChart3, Network, Cpu } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToAnalyzer = () => {
    setActiveSection('analyzer');
    const element = document.getElementById('analyzer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <BrinHeader 
        onNavigate={handleNavigation} 
        activeSection={activeSection} 
      />
      
      <main>
        <HeroSection onNavigateToAnalyzer={handleNavigateToAnalyzer} />
        
        <section id="research" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-red-400">
                <BookOpen className="w-5 h-5" />
                <span>Penelitian Inovatif BRIN</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Deep Learning untuk Klasifikasi Sentimen
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Evaluasi model deep learning untuk mengklasifikasikan sentimen publik terhadap teknologi kendaraan otonom Level 2
              </p>
            </div>

            <div className="space-y-16">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br  from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Abstrak Penelitian</h3>
                      <p className="text-red-600 font-medium">Latar Belakang dan Tujuan Studi</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed">
                  <p className="mb-6">
                    <strong>Teknologi kendaraan otonom Level 2</strong> semakin terintegrasi dalam kendaraan modern, 
                    memicu beragam sentimen publik yang dapat mempengaruhi adopsi masa depan dan keputusan regulasi. 
                    Studi ini berfokus pada pengembangan dan evaluasi model deep learning untuk mengklasifikasikan 
                    sentimen publik terhadap teknologi ini ke dalam tiga kategori: <em>positif, negatif, dan netral</em>.
                  </p>
                  
                  <p className="mb-6">
                    Komentar publik dikumpulkan dari platform Reddit dan YouTube, kemudian menjalani pipeline 
                    preprocessing komprehensif, termasuk pembersihan teks, tokenisasi, dan normalisasi. Label sentimen 
                    ditugaskan secara robust menggunakan pendekatan hibrid yang menggabinkan <strong>VADER, TextBlob, 
                    dan scoring berbasis kata kunci</strong> untuk mengurangi bias dalam klasifikasi sentimen netral dan 
                    meningkatkan akurasi pelabelan secara keseluruhan.
                  </p>
                  
                  <p className="mb-6">
                    Berbagai arsitektur <strong>Recurrent Neural Network (RNN)</strong>, termasuk Simple RNN, 
                    Long Short-Term Memory (LSTM), Gated Recurrent Unit (GRU), dan Bidirectional LSTM (Bi-LSTM), 
                    dilatih dan dievaluasi menggunakan GloVe word embeddings. Model-model ini dibandingkan dengan 
                    klasifikator machine learning konvensional seperti Logistic Regression, Support Vector Machines, 
                    dan Random Forest.
                  </p>
                  
                  <p>
                    Hasil eksperimen menunjukkan bahwa arsitektur <strong>Bidirectional LSTM (Bi-LSTM)</strong>, 
                    terutama ketika fine-tuned dengan 100-dimensional GloVe embeddings, mencapai metrik kinerja tertinggi. 
                    Konfigurasi ini mengungguli baik baseline tradisional maupun varian RNN lainnya, menggarisbawahi 
                    kemampuannya untuk menangkap dependensi sekuensial bidirectional untuk klasifikasi sentimen yang 
                    lebih akurat dan bernuansa, yang berpotensi untuk aplikasi masa depan dalam analisis pasar, 
                    penelitian perilaku konsumen, dan pengembangan kebijakan.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br  from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Pengumpulan Data</h3>
                        <p className="text-red-600 font-medium">Multi-Platform Data Collection</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        Tahap pengumpulan data dilakukan melalui scraping dari dua platform dengan karakteristik 
                        audiens yang berbeda untuk memastikan representasi yang komprehensif.
                      </p>
                      
                      <p className="leading-relaxed">
                        <strong>Reddit scraping</strong> dilakukan menggunakan library PRAW dari subreddit 
                        r/SelfDrivingCars, r/cars, dan r/technology, menggunakan kata kunci <em>"autonomous vehicles"</em>, 
                        <em>"lane assist"</em>, dan <em>"adaptive cruise control"</em>, menghasilkan <strong>3,994 komentar</strong>.
                      </p>
                      
                      <p className="leading-relaxed">
                        <strong>YouTube scraping</strong> memanfaatkan YouTube Data API v3 pada video terkait 
                        Tesla Autopilot, Waymo, dan FSD, menghasilkan <strong>13,000 komentar</strong>.
                      </p>
                      
                      <div className="bg-white rounded-xl p-6 shadow-xl border border-red-200">
                        <h4 className="font-semibold text-gray-900 mb-3">Total Dataset</h4>
                        <div className="text-3xl font-bold text-gray-600">16,994</div>
                        <div className="text-sm text-gray-600">Komentar dari 2 Platform</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6 shadow-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Network className="w-5 h-5 mr-2" />
                        Platform Distribution
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">R</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Reddit</div>
                              <div className="text-sm text-gray-600">3,994 comments</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-orange-600">23.5%</div>
                            <div className="w-24 h-2 bg-gray-200 rounded-full">
                              <div className="w-1/4 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">Y</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">YouTube</div>
                              <div className="text-sm text-gray-600">13,000 comments</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-red-600">76.5%</div>
                            <div className="w-24 h-2 bg-gray-200 rounded-full">
                              <div className="w-3/4 h-2 bg-red-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white rounded-xl p-4 text-center shadow-xl border border-red-200">
                        <div className="text-sm font-medium text-gray-900 mb-1">Keywords</div>
                        <div className="text-xs text-gray-600">Targeted Search</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-xl border border-red-200">
                        <div className="text-sm font-medium text-gray-900 mb-1">API Based</div>
                        <div className="text-xs text-gray-600">PRAW & YouTube</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-xl border border-red-200">
                        <div className="text-sm font-medium text-gray-900 mb-1">Multi-Source</div>
                        <div className="text-xs text-gray-600">Diverse Audience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br  from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Metodologi & Preprocessing</h3>
                      <p className="text-red-600 font-medium">Hybrid Labeling & Deep Learning Approach</p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="prose text-gray-700 space-y-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Preprocessing Pipeline</h4>
                      <div className="bg-white rounded-xl p-6 border border-red-400">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-gray-600" />
                            <span className="font-medium">Text Cleaning</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-gray-600" />
                            <span className="font-medium">Tokenization</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-gray-600" />
                            <span className="font-medium">Normalization</span>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Hybrid Sentiment Labeling</h4>
                      <p className="leading-relaxed">
                        Label sentimen ditugaskan menggunakan pendekatan hibrid yang menggabinkan 
                        <strong> VADER, TextBlob, dan scoring berbasis kata kunci</strong> untuk mengurangi 
                        bias dalam klasifikasi sentimen netral dan meningkatkan akurasi pelabelan.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Cpu className="w-5 h-5 mr-2" />
                        RNN Architectures Evaluated
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                          <div>
                            <div className="font-medium text-gray-900">Simple RNN</div>
                            <div className="text-sm text-gray-600">Basic Recurrent Network</div>
                          </div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-2/3 h-2 bg-yellow-300 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                          <div>
                            <div className="font-medium text-gray-900">LSTM</div>
                            <div className="text-sm text-gray-600">Long Short-Term Memory</div>
                          </div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-4/5 h-2 bg-orange-600 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                          <div>
                            <div className="font-medium text-gray-900">GRU</div>
                            <div className="text-sm text-gray-600">Gated Recurrent Unit</div>
                          </div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-3/4 h-2 bg-orange-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-xl">
                          <div>
                            <div className="font-medium text-red-900">Bi-LSTM </div>
                            <div className="text-sm ">Bidirectional LSTM</div>
                          </div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-full h-2 bg-red-600 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Analisis Data Awal</h3>
                      <p className="text-red-600 font-medium">Dataset dan Distribusi Sentimen</p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <div className="text-gray-700 space-y-4">
                      <p className="text-lg leading-relaxed">
                        Dataset berawal dari <strong>16,994 komentar</strong> dan diambil sebanyak <strong>7,206 komentar</strong> yang dikumpulkan dari platform 
                        Reddit dan YouTube sebagai data training. Sebagian besar komentar berasal dari Reddit sebagai sumber utama 
                        ekspresi opini publik.
                      </p>
                      
                      <p className="leading-relaxed">
                        Analisis menunjukkan bahwa sebagian besar komentar mengandung kurang dari 100 kata, 
                        mengkonfirmasi bahwa pengaturan maxlen = 100 selama preprocessing sudah cukup untuk 
                        menangkap informasi esensial.
                      </p>

                      <div className="bg-white rounded-xl p-6 border border-red-200">
                        <h4 className="font-semibold text-gray-900 mb-3">Robust Sentiment Labeling</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Untuk mencapai pelabelan sentimen yang lebih akurat, penelitian ini menggabungkan 
                          multiple approaches: <strong>VADER, TextBlob, keyword matching</strong>, dan 
                          analisis emosi kontekstual seperti emoji dan tanda seru.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6 border shadow-xl border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2" />
                        Distribusi Sentimen
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Positif</span>
                            <span className="text-sm text-gray-600">4,076 (56.56%)</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-green-500 h-3 rounded-full" style={{ width: '56.56%' }}></div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Negatif</span>
                            <span className="text-sm text-gray-600">1,973 (27.38%)</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-red-500 h-3 rounded-full" style={{ width: '27.38%' }}></div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Netral</span>
                            <span className="text-sm text-gray-600">1,157 (16.06%)</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gray-500 h-3 rounded-full" style={{ width: '16.06%' }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">7,206</div>
                          <div className="text-sm text-gray-600">Total Komentar</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2 text-sm">Class Imbalance Impact</h4>
                      <p className="text-xs text-blue-800">
                        Ketidakseimbangan kelas ini menginformasikan pemilihan metrik evaluasi yang 
                        adil seperti weighted F1-Score dan penerapan class weighting selama 
                        training model BiLSTM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Hasil & Kinerja Model</h3>
                      <p className="text-red-500 font-medium">Superior Performance with Bi-LSTM</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="text-center">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Arsitektur <strong>Bidirectional LSTM (Bi-LSTM)</strong> dengan 100-dimensional GloVe embeddings 
                      mencapai kinerja tertinggi, mengungguli baseline tradisional dan varian RNN lainnya dalam 
                      menangkap dependensi sekuensial bidirectional untuk klasifikasi sentimen yang akurat.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-brfrom-white to-white rounded-xl p-6 border border-red-500">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">94.2%</div>
                        <div className="text-sm font-medium text-gray-900 mb-1">Akurasi Tertinggi</div>
                        <div className="text-xs text-gray-600">Bi-LSTM Model</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-white rounded-xl p-6 border border-red-500">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">92.1%</div>
                        <div className="text-sm font-medium text-gray-900 mb-1">F1-Score</div>
                        <div className="text-xs text-gray-600">Balanced Performance</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-white rounded-xl p-6 border border-red-500">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold  text-gray-900 mb-2">100D</div>
                        <div className="text-sm font-medium text-gray-900 mb-1">GloVe Embeddings</div>
                        <div className="text-xs text-gray-600">Optimal Configuration</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4 text-center">Aplikasi Potensial</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="flex flex-col items-center">
                        <BarChart3 className="w-8 h-8 text-gray-600 mb-2" />
                        <div className="font-medium text-gray-900">Market Analysis</div>
                        <div className="text-sm text-gray-600">Analisis sentimen pasar</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <Users className="w-8 h-8 text-gray-600 mb-2" />
                        <div className="font-medium text-gray-900">Consumer Research</div>
                        <div className="text-sm text-gray-600">Riset perilaku konsumen</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <Target className="w-8 h-8 text-gray-600 mb-2" />
                        <div className="font-medium text-gray-900">Policy Development</div>
                        <div className="text-sm text-gray-600">Pengembangan kebijakan</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analyzer" className="bg-white">
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-red-200">
                  <Brain className="w-5 h-5" />
                  <span>AI Sentiment Analyzer BRIN</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Analisis Sentimen Real-time
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Gunakan model deep learning kami untuk menganalisis sentimen teks tentang teknologi kendaraan otonom
                </p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4">
              <SentimentAnalyzer />
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* BRIN Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <img 
                      src="/src/assets/brin-logo.png" 
                      alt="BRIN Logo" 
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  </div>
                <div>
                    <h3 className="text-xl font-bold">BRIN AI Research</h3>
                    <p className="text-gray-400 text-sm">Sentiment Analysis for Autonomous Vehicles</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Penelitian deep learning untuk menganalisis sentimen publik terhadap 
                  teknologi kendaraan otonom Level 2, dikembangkan oleh Badan Riset dan Inovasi Nasional.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => handleNavigation('home')}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Beranda
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigation('research')}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Penelitian
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigation('analyzer')}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Sentiment Analyzer
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Kontak BRIN</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p> Website: www.brin.go.id</p>
                  <p className="text-xs text-gray-400 mt-4">
                    Gedung BRIN, Jl. Sangkuriang, Dago, Kecamatan Coblong, Kota Bandung
                    Jawa Barat, Indonesia.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400">
                © 2024 BRIN (Badan Riset dan Inovasi Nasional). All rights reserved.
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-xs text-gray-500">Powered by</span>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Brain className="w-3 h-3" />
                  <span>Deep Learning</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Target className="w-3 h-3" />
                  <span>NLP</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;