import {createSlice} from '@reduxjs/toolkit';
import { setLocalStorageItem } from "@/utils/localStorage";
import { registerUser, userLogin, getProfile, userLogout, sendOtp, verifyOtp, resetPassword } from '../action/authActions';


const initialState = {
    loading: false,
    userInfo: typeof window !== 'undefined' && localStorage.getItem('user-info')
    ? JSON.parse(localStorage.getItem('user-info'))
    : null,
    //userInfo: localStorage.getItem('user-info')? JSON.parse(localStorage.getItem('user-info')) : null, 
    //userToken: null, // for storing the JWT
    userProfile:null,
    error: null,
    success: false,
    loginResponse: false,
    signUpResponse:null,
    logoutResponse:null,
    forgotPasswordResponse:null,
    // OTP Flow State
    otpStep: typeof window !== 'undefined' ? parseInt(sessionStorage.getItem('otpStep')) || 1 : 1,                    // Current step: 1 (send OTP) | 2 (verify OTP) | 3 (reset password)
    otpEmail: typeof window !== 'undefined' ? sessionStorage.getItem('otpEmail') : null,                // Stored email for multi-step tracking
    verifiedOtp: typeof window !== 'undefined' ? sessionStorage.getItem('verifiedOtp') : null,             // Store the verified OTP for reset password
    otpSent: false,                // Step 1 completion indicator
    otpVerified: typeof window !== 'undefined' && sessionStorage.getItem('otpVerified') === 'true',            // Step 2 completion indicator
    resetPasswordResponse: false,   // Step 3 completion indicator
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser: (state, action) => {
      state.userInfo = action.payload;
      },

      // Set current step in OTP flow
      setOtpStep: (state, action) => {
        state.otpStep = action.payload;
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('otpStep', action.payload);
        }
      },

      // Store email/login during OTP flow
      setOtpEmail: (state, action) => {
        state.otpEmail = action.payload;
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('otpEmail', action.payload);
        }
      },

      // Reset OTP flow state
      resetOtpFlow: (state) => {
        state.otpStep = 1;
        state.otpEmail = null;
        state.verifiedOtp = null;
        state.otpSent = false;
        state.otpVerified = false;
        state.resetPasswordResponse = false;
        state.error = null;
        
        // Clear sessionStorage backup
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem('otpStep');
          sessionStorage.removeItem('otpEmail');
          sessionStorage.removeItem('verifiedOtp');
          sessionStorage.removeItem('otpVerified');
        }
      },

      // Universal reset for auth-related state
      resetLoginData: (state) => {
         state.loading = false;
         state.success = false;
         state.error = null;
         state.userInfo = null;
         state.userProfile = null;
         state.loginResponse = false;
         state.signUpResponse = null;
         state.logoutResponse = null;
         state.forgotPasswordResponse = null;
         state.otpStep = 1;
         state.otpEmail = null;
         state.verifiedOtp = null;
         state.otpSent = false;
         state.otpVerified = false;
         state.resetPasswordResponse = false;
         
         // Clear sessionStorage backup
         if (typeof window !== 'undefined') {
           sessionStorage.removeItem('otpStep');
           sessionStorage.removeItem('otpEmail');
           sessionStorage.removeItem('verifiedOtp');
           sessionStorage.removeItem('otpVerified');
         }
      },

    },
    extraReducers: (builder) =>  {
      // login user
      builder
         .addCase(userLogin.pending, (state, action) => {
            state.loading = true
            state.error = null
         })
         .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
            state.loginResponse = true;
         })
         .addCase(userLogin.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         });
       // Register user
       builder
          .addCase(registerUser.pending, (state) => {
             state.loading = true;
             state.error = null;
             state.signUpResponse = null;
          })

          .addCase(registerUser.fulfilled, (state, action) => {
             state.loading = false;
             state.userInfo = action.payload;
             state.success = true;
             state.signUpResponse = true;
          })

          .addCase(registerUser.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload;
             state.signUpResponse = false;
          });

         // getProfile User
         builder
         .addCase(getProfile.pending, (state, action) => {
            state.loading = true
            state.error = null
         })
         .addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false
            state.userProfile = action.payload
         })
         .addCase(getProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         });

         // Logout User
       builder
          .addCase(userLogout.pending, (state) => {
             state.loading = true;
             state.error = null;
          })

          .addCase(userLogout.fulfilled, (state, action) => {
             state.loading = false;
             state.userInfo = null;
             state.error = null;
             state.logoutResponse = action.payload;
          })

          .addCase(userLogout.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload || "Logout failed";
          });

       // Send OTP (Step 1)
       builder
          .addCase(sendOtp.pending, (state) => {
             state.loading = true;
             state.error = null;
             state.otpSent = false;
          })

          .addCase(sendOtp.fulfilled, (state, action) => {
             state.loading = false;
             state.otpSent = true;
             state.otpStep = 2;
             state.error = null;
             if (typeof window !== 'undefined') {
               sessionStorage.setItem('otpStep', 2);
             }
          })

          .addCase(sendOtp.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload;
             state.otpSent = false;
          });

       // Verify OTP (Step 2)
       builder
          .addCase(verifyOtp.pending, (state) => {
             state.loading = true;
             state.error = null;
             state.otpVerified = false;
          })

          .addCase(verifyOtp.fulfilled, (state, action) => {
             state.loading = false;
             state.otpVerified = true;
             state.verifiedOtp = action.meta.arg.otp; // Store the verified OTP
             state.otpStep = 3;
             state.error = null;
             
             // Backup to sessionStorage in case Redux state is lost
             if (typeof window !== 'undefined') {
               sessionStorage.setItem('verifiedOtp', action.meta.arg.otp);
               sessionStorage.setItem('otpVerified', 'true');
               sessionStorage.setItem('otpStep', 3);
             }
          })

          .addCase(verifyOtp.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload;
             state.otpVerified = false;
          });

       // Reset Password (Step 3)
       builder
          .addCase(resetPassword.pending, (state) => {
             state.loading = true;
             state.error = null;
             state.resetPasswordResponse = false;
          })

          .addCase(resetPassword.fulfilled, (state, action) => {
             state.loading = false;
             state.resetPasswordResponse = true;
             // If auto-login occurred, userInfo is already set in action.payload.authData
             if (action.payload?.autoLogin && action.payload?.authData) {
                state.userInfo = action.payload.authData;
             }
             state.error = null;
          })

          .addCase(resetPassword.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload;
             state.resetPasswordResponse = false;
          });

    },
})

export const { setUser, resetLoginData, setOtpStep, setOtpEmail, resetOtpFlow } = authSlice.actions;
export default authSlice.reducer;
