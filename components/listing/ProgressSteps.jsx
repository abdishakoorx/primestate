import React from 'react'
import { CheckCircle } from 'lucide-react'

const ProgressSteps = ({ currentStep, totalSteps = 4, stepLabels = [] }) => {
    const defaultLabels = ['Basic Info', 'Details', 'Location', 'Final']
    const labels = stepLabels.length === totalSteps ? stepLabels : defaultLabels

    return (
        <div className="w-full max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
                {Array.from({ length: totalSteps }, (_, index) => {
                    const stepNumber = index + 1
                    const isCompleted = currentStep > stepNumber
                    const isCurrent = currentStep === stepNumber
                    const isUpcoming = currentStep < stepNumber

                    return (
                        <div key={stepNumber} className="flex items-center flex-1">
                            {/* Step Circle */}
                            <div className="relative flex flex-col items-center">
                                <div
                                    className={`
                    relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 font-semibold text-sm transition-all duration-300
                    ${isCompleted
                                            ? 'bg-green-500 border-green-500 text-white shadow-lg scale-105'
                                            : isCurrent
                                                ? 'bg-primary border-primary text-primary-foreground shadow-lg scale-110 ring-4 ring-primary/20'
                                                : 'bg-muted border-muted-foreground/30 text-muted-foreground'
                                        }
                  `}
                                >
                                    {isCompleted ? (
                                        <CheckCircle className="w-6 h-6" />
                                    ) : (
                                        <span>{stepNumber}</span>
                                    )}
                                </div>

                                {/* Step Label */}
                                <div className="mt-3 text-center">
                                    <div
                                        className={`
                      font-medium text-sm transition-colors duration-300
                      ${isCompleted
                                                ? 'text-green-600'
                                                : isCurrent
                                                    ? 'text-primary font-semibold'
                                                    : 'text-muted-foreground'
                                            }
                    `}
                                    >
                                        {labels[index]}
                                    </div>
                                    <div
                                        className={`
                      text-xs mt-1 transition-colors duration-300
                      ${isCompleted
                                                ? 'text-green-500'
                                                : isCurrent
                                                    ? 'text-primary/70'
                                                    : 'text-muted-foreground/60'
                                            }
                    `}
                                    >
                                        {isCompleted ? 'Completed' : isCurrent ? 'Current' : 'Upcoming'}
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Line */}
                            {stepNumber < totalSteps && (
                                <div className="relative flex-1 h-1 mx-4 -mt-8">
                                    <div className="absolute inset-0 rounded-full bg-muted-foreground/20" />
                                    <div
                                        className={`
                      absolute inset-0 rounded-full transition-all duration-500 ease-out
                      ${isCompleted
                                                ? 'bg-green-500 shadow-sm'
                                                : isCurrent && stepNumber < totalSteps
                                                    ? 'bg-gradient-to-r from-primary to-primary/30 animate-pulse'
                                                    : 'bg-muted-foreground/20'
                                            }
                    `}
                                        style={{
                                            width: isCompleted ? '100%' : isCurrent ? '50%' : '0%'
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                        Step {currentStep} of {totalSteps}
                    </span>
                    <span className="text-sm font-medium text-primary">
                        {Math.round((currentStep / totalSteps) * 100)}% Complete
                    </span>
                </div>
                <div className="w-full h-2 overflow-hidden rounded-full bg-muted">
                    <div
                        className="h-full transition-all duration-700 ease-out rounded-full bg-gradient-to-r from-primary to-primary/80"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProgressSteps