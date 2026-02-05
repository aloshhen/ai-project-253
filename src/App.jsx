import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Zap,
  TrendingUp,
  Users,
  Wallet,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Lock,
  Globe,
  Smartphone,
  CreditCard,
  ChevronRight,
  Menu,
  X,
  Bitcoin,
  Bot,
  ArrowLeftRight,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Wifi
} from 'lucide-react'

// SafeIcon Component
const SafeIcon = ({ name, size = 24, className = '', color }) => {
  const icons = {
    shield: Shield,
    zap: Zap,
    trendingUp: TrendingUp,
    users: Users,
    wallet: Wallet,
    arrowRight: ArrowRight,
    checkCircle: CheckCircle,
    sparkles: Sparkles,
    lock: Lock,
    globe: Globe,
    smartphone: Smartphone,
    creditCard: CreditCard,
    chevronRight: ChevronRight,
    menu: Menu,
    x: X,
    bitcoin: Bitcoin,
    bot: Bot,
    exchange: ArrowLeftRight,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
    wifi: Wifi
  }

  const IconComponent = icons[name] || icons.shield

  return <IconComponent size={size} className={className} color={color} />
}

// 3D Floating Card Component
const FloatingCard = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full aspect-[1.586] rounded-2xl overflow-hidden cursor-pointer"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d'
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Card Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900" />

        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-blue-500/50 p-[1px]">
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-violet-950/90 to-slate-900" />
        </div>

        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-blue-500/10" />

        {/* Card Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between" style={{ transform: 'translateZ(50px)' }}>
          {/* Card Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center glow-violet">
                <SafeIcon name="sparkles" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider">Novus</p>
                <p className="text-white font-bold text-lg">Financial</p>
              </div>
            </div>
            <SafeIcon name="wifi" size={32} className="text-white/80" />
          </div>

          {/* Card Number */}
          <div className="my-8">
            <p className="text-white/60 text-xs mb-2 uppercase tracking-wider">Card Number</p>
            <p className="text-2xl font-mono text-white tracking-widest drop-shadow-lg">
              4532 •••• •••• 8901
            </p>
          </div>

          {/* Card Footer */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Card Holder</p>
              <p className="text-white font-semibold tracking-wide">ALEXANDER NOVAK</p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Expires</p>
              <p className="text-white font-semibold">12/28</p>
            </div>
            <div className="w-16 h-10 rounded bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 flex items-center justify-center">
              <div className="w-8 h-5 rounded-sm bg-yellow-500/40" />
            </div>
          </div>
        </div>

        {/* Ambient Glow Behind Card */}
        <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 to-blue-600/30 blur-3xl -z-10 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative group"
  >
    <div className="glass rounded-3xl p-8 h-full overflow-hidden relative">
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
        <SafeIcon name={icon} size={28} className="text-white" />
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
        {description}
      </p>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full" />
    </div>
  </motion.div>
)

// Wave Slider Component
const WaveSlider = () => {
  const [value, setValue] = useState(5000)
  const [rate, setRate] = useState(8.5)

  const maxValue = 100000
  const monthlyReturn = (value * (rate / 100)) / 12

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
    >
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Savings Calculator
        </h3>
        <p className="text-slate-400">See how your money grows with Novus</p>
      </div>

      {/* Amount Display */}
      <div className="text-center mb-8">
        <motion.div
          className="text-5xl md:text-6xl font-black text-gradient mb-2"
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ${value.toLocaleString()}
        </motion.div>
        <p className="text-slate-500 text-sm uppercase tracking-wider">Initial Deposit</p>
      </div>

      {/* Wave Slider */}
      <div className="relative mb-10">
        <div className="relative h-16 bg-slate-800/50 rounded-2xl overflow-hidden">
          {/* Base Track - Dark Background */}
          <div className="absolute inset-0 bg-slate-800 rounded-2xl" />

          {/* Wave Animation Fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500"
            style={{
              width: `${(value / maxValue) * 100}%`
            }}
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Animated Wave Top Edge */}
            <svg
              className="absolute -right-1 top-0 h-full w-4"
              viewBox="0 0 10 60"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,30 Q5,20 0,10 Q5,0 0,0 L10,0 L10,60 L0,60 Q5,50 0,40 Q5,30 0,30"
                fill="url(#waveGradient)"
                animate={{
                  d: [
                    "M0,30 Q5,20 0,10 Q5,0 0,0 L10,0 L10,60 L0,60 Q5,50 0,40 Q5,30 0,30",
                    "M0,30 Q5,40 0,50 Q5,60 0,60 L10,60 L10,0 L0,0 Q5,10 0,20 Q5,30 0,30",
                    "M0,30 Q5,20 0,10 Q5,0 0,0 L10,0 L10,60 L0,60 Q5,50 0,40 Q5,30 0,30"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Wave Lines Effect Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-white"
                style={{ top: `${20 + i * 15}%` }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="1000"
            max={maxValue}
            step="1000"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          />
        </div>

        {/* Slider Labels */}
        <div className="flex justify-between mt-3 text-sm text-slate-500">
          <span>$1,000</span>
          <span>$50,000</span>
          <span>$100,000</span>
        </div>
      </div>

      {/* Interest Rate Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[6.5, 8.5, 10.5, 12.5].map((r) => (
          <button
            key={r}
            onClick={() => setRate(r)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              rate === r
                ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {r}% APY
          </button>
        ))}
      </div>

      {/* Result */}
      <div className="glass rounded-2xl p-6 text-center">
        <p className="text-slate-400 mb-2">Monthly Return</p>
        <motion.p
          className="text-4xl font-bold text-white"
          key={monthlyReturn}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          +${monthlyReturn.toFixed(2)}
        </motion.p>
        <p className="text-violet-400 text-sm mt-2">Compounding daily</p>
      </div>
    </motion.div>
  )
}

// Loan Calculator Component
const LoanCalculator = () => {
  const [amount, setAmount] = useState(25000)
  const [months, setMonths] = useState(24)
  const [interestRate, setInterestRate] = useState(5.9)

  const monthlyPayment = (amount * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, months)) / (Math.pow(1 + interestRate / 100 / 12, months) - 1)
  const totalPayment = monthlyPayment * months
  const totalInterest = totalPayment - amount

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-strong rounded-3xl p-8 md:p-10 max-w-4xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side - Controls */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <SafeIcon name="trendingUp" size={28} className="text-violet-400" />
            Loan Calculator
          </h3>

          {/* Loan Amount */}
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <label className="text-slate-400 text-sm">Loan Amount</label>
              <span className="text-white font-semibold">${amount.toLocaleString()}</span>
            </div>
            <div className="relative h-12 flex items-center">
              {/* Visible Track */}
              <div className="absolute inset-x-0 h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-150"
                  style={{ width: `${((amount - 5000) / (100000 - 5000)) * 100}%` }}
                />
              </div>
              {/* Slider Input */}
              <input
                type="range"
                min="5000"
                max="100000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {/* Custom Thumb (visible) */}
              <div
                className="absolute h-6 w-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full border-2 border-white shadow-lg pointer-events-none transition-all duration-150"
                style={{ left: `calc(${((amount - 5000) / (100000 - 5000)) * 100}% - 12px)` }}
              />
            </div>
          </div>

          {/* Duration */}
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <label className="text-slate-400 text-sm">Duration (months)</label>
              <span className="text-white font-semibold">{months} months</span>
            </div>
            <div className="relative h-12 flex items-center">
              {/* Visible Track */}
              <div className="absolute inset-x-0 h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-150"
                  style={{ width: `${((months - 12) / (84 - 12)) * 100}%` }}
                />
              </div>
              {/* Slider Input */}
              <input
                type="range"
                min="12"
                max="84"
                step="6"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {/* Custom Thumb (visible) */}
              <div
                className="absolute h-6 w-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full border-2 border-white shadow-lg pointer-events-none transition-all duration-150"
                style={{ left: `calc(${((months - 12) / (84 - 12)) * 100}% - 12px)` }}
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <label className="text-slate-400 text-sm">Interest Rate</label>
              <span className="text-white font-semibold">{interestRate}%</span>
            </div>
            <div className="relative h-12 flex items-center">
              {/* Visible Track */}
              <div className="absolute inset-x-0 h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-150"
                  style={{ width: `${((interestRate - 3.9) / (15.9 - 3.9)) * 100}%` }}
                />
              </div>
              {/* Slider Input */}
              <input
                type="range"
                min="3.9"
                max="15.9"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {/* Custom Thumb (visible) */}
              <div
                className="absolute h-6 w-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full border-2 border-white shadow-lg pointer-events-none transition-all duration-150"
                style={{ left: `calc(${((interestRate - 3.9) / (15.9 - 3.9)) * 100}% - 12px)` }}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Results */}
        <div className="flex flex-col justify-center">
          <div className="glass rounded-2xl p-6 space-y-6">
            <div className="text-center pb-6 border-b border-white/10">
              <p className="text-slate-400 mb-2">Monthly Payment</p>
              <motion.p
                className="text-5xl font-black text-gradient"
                key={monthlyPayment}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ${monthlyPayment.toFixed(0)}
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-slate-500 text-xs mb-1">Total Payment</p>
                <motion.p
                  className="text-lg font-bold text-white"
                  key={totalPayment}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ${totalPayment.toFixed(0)}
                </motion.p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 text-xs mb-1">Total Interest</p>
                <motion.p
                  className="text-lg font-bold text-violet-400"
                  key={totalInterest}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ${totalInterest.toFixed(0)}
                </motion.p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2">
              Apply Now
              <SafeIcon name="arrowRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Savings', href: '#savings' },
    { name: 'Loans', href: '#loans' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center glow-violet">
            <SafeIcon name="sparkles" size={22} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">Novus</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white text-slate-950 px-6 py-2.5 rounded-full font-semibold hover:bg-slate-200 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SafeIcon name={isOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                  className="text-slate-300 hover:text-white py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-white text-slate-950 px-6 py-3 rounded-full font-semibold mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
              >
                <SafeIcon name="sparkles" size={16} className="text-violet-400" />
                <span className="text-sm text-slate-300">The Future of Banking is Here</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
                Banking for the{' '}
                <span className="text-gradient">Digital Age</span>
              </h1>

              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience seamless financial management with AI-powered insights,
                instant transfers, and bank-grade security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  Open Free Account
                  <SafeIcon name="arrowRight" size={20} />
                </button>
                <button className="glass text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <SafeIcon name="smartphone" size={20} />
                  Download App
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white">2M+</p>
                  <p className="text-slate-500 text-sm">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">$4B+</p>
                  <p className="text-slate-500 text-sm">Transactions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="text-slate-500 text-sm">Uptime</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 3D Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <FloatingCard />

              {/* Floating Elements Around Card */}
              <motion.div
                className="absolute -top-8 -right-8 glass px-4 py-2 rounded-xl flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <SafeIcon name="lock" size={16} className="text-green-400" />
                <span className="text-sm text-white">256-bit Encrypted</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-8 glass px-4 py-2 rounded-xl flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <SafeIcon name="zap" size={16} className="text-yellow-400" />
                <span className="text-sm text-white">Instant Transfers</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Everything you need to{' '}
              <span className="text-gradient">manage money</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Powerful features designed for the modern financial lifestyle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="bitcoin"
              title="Crypto Operations"
              description="Buy, sell, and hold cryptocurrencies directly in your account. Support for Bitcoin, Ethereum, and 50+ altcoins with real-time conversion."
              delay={0}
            />
            <FeatureCard
              icon="bot"
              title="AI Financial Assistant"
              description="Get personalized insights and recommendations powered by machine learning. Smart budgeting and automated savings strategies."
              delay={0.1}
            />
            <FeatureCard
              icon="exchange"
              title="Instant P2P Transfers"
              description="Send money to anyone, anywhere in the world instantly. Zero fees for domestic transfers and competitive rates for international."
              delay={0.2}
            />
          </div>

          {/* Additional Feature Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                <SafeIcon name="globe" size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Global Coverage</h3>
                <p className="text-slate-400">Access your account from 150+ countries with local currency support and no foreign transaction fees.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shrink-0">
                <SafeIcon name="shield" size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Bank-Grade Security</h3>
                <p className="text-slate-400">Your funds are protected with 256-bit encryption, biometric authentication, and FDIC insurance up to $250,000.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section id="savings" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-blue-950/20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Watch your savings{' '}
              <span className="text-gradient">grow exponentially</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Industry-leading APY rates that compound daily
            </p>
          </motion.div>

          <WaveSlider />
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section id="loans" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Flexible loans with{' '}
              <span className="text-gradient">competitive rates</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Calculate your monthly payments and get instant approval
            </p>
          </motion.div>

          <LoanCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/50 to-blue-950/50" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to upgrade your{' '}
              <span className="text-gradient">financial life?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Join over 2 million users who have already made the switch to smarter banking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-all transform hover:scale-105 shadow-2xl shadow-white/20 flex items-center justify-center gap-2">
                Get Started Free
                <SafeIcon name="arrowRight" size={20} />
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <SafeIcon name="checkCircle" size={16} className="text-green-400" />
                No monthly fees
              </span>
              <span className="flex items-center gap-2">
                <SafeIcon name="checkCircle" size={16} className="text-green-400" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <SafeIcon name="checkCircle" size={16} className="text-green-400" />
                24/7 Support
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                  <SafeIcon name="sparkles" size={22} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">Novus</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                The next generation of digital banking. Secure, smart, and designed for your lifestyle.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="creditCard" size={14} /> Checking Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="trendingUp" size={14} /> Savings</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="creditCard" size={14} /> Credit Cards</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="wallet" size={14} /> Loans</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="bitcoin" size={14} /> Crypto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="globe" size={14} /> About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="users" size={14} /> Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="checkCircle" size={14} /> Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="sparkles" size={14} /> Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="arrowRight" size={14} /> Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="shield" size={14} /> Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="lock" size={14} /> Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="checkCircle" size={14} /> Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><SafeIcon name="shield" size={14} /> Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © 2024 Novus Financial. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><SafeIcon name="twitter" size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><SafeIcon name="instagram" size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><SafeIcon name="linkedin" size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><SafeIcon name="github" size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App