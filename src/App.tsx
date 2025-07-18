import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { 
  BookOpen, 
  Calendar, 
  DollarSign, 
  Target, 
  TrendingUp, 
  Clock, 
  Award,
  CheckCircle,
  BarChart3,
  GraduationCap,
  Star,
  ArrowRight
} from 'lucide-react'

function App() {
  const [currentGPA, setCurrentGPA] = useState(3.7)
  const [semesterProgress, setSemesterProgress] = useState(65)
  const [monthlyBudget, setMonthlyBudget] = useState(800)
  const [spent, setSpent] = useState(520)

  const upcomingTasks = [
    { id: 1, task: "Submit Research Paper", due: "Tomorrow", priority: "high" },
    { id: 2, task: "Midterm Exam - Statistics", due: "3 days", priority: "high" },
    { id: 3, task: "Group Project Meeting", due: "Friday", priority: "medium" },
    { id: 4, task: "Library Book Return", due: "Next week", priority: "low" }
  ]

  const achievements = [
    { id: 1, title: "Dean's List", earned: true },
    { id: 2, title: "Perfect Attendance", earned: true },
    { id: 3, title: "Budget Master", earned: false },
    { id: 4, title: "Early Bird", earned: true }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-u360-navy text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo-white.png" 
                alt="U360 Logo" 
                className="h-10 w-auto u360-logo"
              />
              <div className="border-l border-slate-400 pl-4">
                <h1 className="text-xl font-semibold text-white">U360</h1>
                <p className="text-xs text-white">University Life Organization</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-marine-blue transition-colors">Dashboard</a>
              <a href="#" className="text-white hover:text-marine-blue transition-colors">Planner</a>
              <a href="#" className="text-white hover:text-marine-blue transition-colors">Finances</a>
              <a href="#" className="text-white hover:text-marine-blue transition-colors">Goals</a>
              <a href="#" className="text-white hover:text-marine-blue transition-colors">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-u360-hero text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/logo-white.png" 
              alt="U360 Shield" 
              className="h-24 w-auto u360-logo"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Master Your Academic Journey with <span className="text-gradient-gold">U360</span>
          </h2>
          <p className="text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your university experience with U360's professional-grade organization platform. 
            Build discipline, track progress, and achieve academic excellence through our structured planning system 
            trusted by successful students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3">
              Start Your U360 Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 px-8 py-3">
              View Success Stories
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-white">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-amber-400" />
              <span>Trusted by 50,000+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-amber-400" />
              <span>4.9/5 Student Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-indigo-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-primary-enhanced flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-u360-blue" />
                Current GPA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-u360-blue">{currentGPA}</div>
              <p className="text-sm text-marine-blue mt-1 flex items-center font-medium">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.2 from last semester
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-marine-blue shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-primary-enhanced flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-marine-blue" />
                Semester Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-marine-blue">{semesterProgress}%</div>
              <Progress value={semesterProgress} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-u360-gold shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-primary-enhanced flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-u360-gold" />
                Budget Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-u360-gold">${monthlyBudget - spent}</div>
              <p className="text-sm text-secondary-enhanced mt-1">Remaining this month</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-primary-enhanced flex items-center">
                <Target className="h-4 w-4 mr-2 text-purple-600" />
                Goals Achieved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">7/10</div>
              <p className="text-sm text-marine-blue mt-1 font-medium">This semester</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="planner">Academic Planner</TabsTrigger>
            <TabsTrigger value="finances">Financial Tracker</TabsTrigger>
            <TabsTrigger value="goals">Goal Setting</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Upcoming Tasks
                  </CardTitle>
                  <CardDescription>Stay on top of your deadlines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-800">{task.task}</p>
                        <p className="text-sm text-slate-600">Due: {task.due}</p>
                      </div>
                      <Badge 
                        variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Achievements
                  </CardTitle>
                  <CardDescription>Your academic milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      {achievement.earned ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-slate-300 rounded-full" />
                      )}
                      <span className={`font-medium ${achievement.earned ? 'text-slate-800' : 'text-slate-500'}`}>
                        {achievement.title}
                      </span>
                      {achievement.earned && <Star className="h-4 w-4 text-amber-500" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* U360 Motivational Quote */}
            <Card className="gradient-u360-accent text-white shadow-xl">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 left-4 opacity-20">
                  <img src="/logo-white.png" alt="U360" className="h-12 w-auto" />
                </div>
                <blockquote className="text-xl font-medium mb-4 relative z-10">
                  "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
                </blockquote>
                <cite className="text-white relative z-10">— Aristotle</cite>
                <div className="mt-4 text-sm text-white relative z-10">
                  <span className="bg-white/20 px-3 py-1 rounded-full">U360 Daily Inspiration</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="planner" className="space-y-6">
            <Card className="bg-emerald-500">
              <CardHeader>
                <CardTitle className="text-white">Academic Calendar</CardTitle>
                <CardDescription className="text-white">Plan your semester with precision</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-white">
                  <Calendar className="h-16 w-16 mx-auto mb-4 text-white" />
                  <p className="text-lg font-medium mb-2 text-white">Academic Planner Coming Soon</p>
                  <p className="text-white">Organize your courses, assignments, and study schedule</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finances" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Budget Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Budget</span>
                      <span className="font-semibold">${monthlyBudget}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Spent</span>
                      <span className="font-semibold text-red-600">${spent}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Remaining</span>
                      <span className="font-semibold text-green-600">${monthlyBudget - spent}</span>
                    </div>
                    <Progress value={(spent / monthlyBudget) * 100} className="mt-4" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Food & Dining</span>
                      <span className="font-semibold">$280</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Books & Supplies</span>
                      <span className="font-semibold">$150</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Transportation</span>
                      <span className="font-semibold">$90</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card className="bg-purple-500">
              <CardHeader>
                <CardTitle className="text-white">Academic Goals</CardTitle>
                <CardDescription className="text-white">Set and track your objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-white">
                  <Target className="h-16 w-16 mx-auto mb-4 text-white" />
                  <p className="text-lg font-medium mb-2 text-white">Goal Setting System</p>
                  <p className="text-white">Define your academic and personal objectives</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-indigo-500">
              <CardHeader>
                <CardTitle className="text-white">Performance Analytics</CardTitle>
                <CardDescription className="text-white">Track your academic progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-white">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-white" />
                  <p className="text-lg font-medium mb-2 text-white">Analytics Dashboard</p>
                  <p className="text-white">Visualize your academic performance and trends</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-u360-navy text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="/logo-white.png" alt="U360 Logo" className="h-8 w-auto" />
              <div>
                <h3 className="text-lg font-semibold text-white">U360</h3>
                <p className="text-sm text-white">University Life Organization Platform</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white mb-2">
                © 2024 U360. Empowering students to achieve academic excellence.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 text-sm text-white">
                <span className="flex items-center">
                  <Award className="h-3 w-3 mr-1 text-amber-400" />
                  Trusted by Universities Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App