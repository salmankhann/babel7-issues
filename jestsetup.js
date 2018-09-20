import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.TRANS = {};

window.TRANS = { "Summary": "الخلاصة", "Working": "جار العمل", "Importance_Feedback": "الملاحظات على الأهمية", "Importance": "الأهمية", "Summary_Score": "تقييم الخلاصة", "Urgency": "الأولوية", "Author": "معد التقرير", "No_Results_Found": "لا يوجد أي نتيجة", "Political_Department_Opinion": "رأي الإدارة السياسية", "Forward_To_Minister": "إرسال للوزير", "MRPD04_Error_Message": "Looks like there is an error with your profile.<br> Please Contact Strategy And Future Department with error Code: MRPD 04", "DESK_OFFICERS": "مسؤول ملف", "Hide_Feedback": "اخفي الملاحظات", "MRPD02_Error_Message": "Looks like there is an error with your profile.<br> Please Contact Strategy And Future Department with error Code: MRPD 02", "Intended_For": "المعدة ل", "Summary_Feedback": "الملاحظات على الخلاصة", "IMPLICATIONS_TEXT_MAX_LENGTH": "الحد الأقصى لطول نص التداعيات", "Submit_And_Edit": "إرسال و تعديل", "Purpose": "الهدف", "DeskOfficer_Score": "تقييم مسؤول الملف", "Note_Msg_Moved_To_Sent_To_MOS": "ملاحظة: يمكنك إيجاد التقرير في \"أرسلت للوزير\"", "Submit": "إرسال", "All_Good": "تمت بنجاح", "Reports_From_Mission": "تقارير البعثات", "Political_Department_Score": "تقييم الإدارة السياسية", "Note_Moved_To_Msg": "ملاحظة: يمكنك إيجاد التقرير في", "Created_Date": "تاريخ الإنشاء", "Details_Score": "تقييم التفاصيل", "Urgency_and_Date": "الأولوية و تاريخ الأولوية", "MRPD03_Error_Message": "Looks like there is an error with your profile.<br> Please Contact Strategy And Future Department with error Code: MRPD 03", "MRPD01_Error_Message": "Looks like there is an error with your profile.<br> Please Contact Strategy And Future Department with error Code: MRPD 01", "Report_Is_In": "التقرير في حالة", "Report_title": "عنوان التقرير", "View_Feedback": "اعرض الملاحظات", "Forwarded_To_Ministers": "أرسلت إلى الوزير", "Forwarded_To_AM": 'أرسلت لمساعد الوزير', "Max_Length_By_Characters": "الحد الأقصى (بعدد الأحرف)", "MOS_Score": "تقييم وزير الدولة", "Submit_And_Archive": "إرسال و حفظ بالأرشيف", "Remaining_Characters": "حرف متبقي", "Details": "التفاصيل", "Implications_Feedback": "الملاحظات على التداعيات", "TOTAL_MOS_SCORE": "تقييم وزير الدولة الكلي", "SUBMITTORS": "موظف بعثة", "DETAILS_TEXT_MAX_LENGTH": "الحد الأقصى لطول نص التفاصيل", "Archived_Reports": "أرشيف التقارير", "SUBJECT_TEXT_MAX_LENGTH": "الحد الأقصى لطول نص الموضوع", "Add_New_Report": "إضافة تقرير جديد", "IMPORTANCE_TEXT_MAX_LENGTH": "الحد الأقصى لطول نص الأهمية", "ID": "الرقم", "Email": "البريد الإلكتروني", "Close": "إغلاق", "Score": "التقييم", "Implications": "التداعيات", "Prepared_For": "تم إعداده لإدارة", "Basic_Details": "البيانات الأساسية", "For_Minister_Review": "تقارير بانتظار المراجعة", "Intended_Audience": "الجمهور المستهدف", "Total_Score": "التقييم الكلي", "Mission_Opinion": "رأي البعثة", "Submitted_Successfully": "تم الإرسال بنجاح", "Forwarded_From_DeskOfficer": "تقارير للمراجعة من مسؤول ملف", "Mission_Reports": "تقارير البعثات", "Details_Feedback": "الملاحظات على التفاصيل", "MINISTERS": "وزير الدولة", "Forward_To_PDDirector": "أرسل للمدير", "Forward_To_AM": 'أرسل لمساعد الوزير', "Mission": "البعثة", "SUMMARY_TEXT_MAX_LENGTH": "الحد الأقصى لطول نص الملخص", "MOS_FeedBack": "ملاحظات وزير الدولة", "Please_Select_Score": "الرجاء اختيار التقييم", "Implications_Score": "تقييم التداعيات", "Minister_Archived": "أرشيف التقارير", "MOS_SUGGESTED_DIRECTION": "توجيهات وزير الدولة", "Importance_Score": "تقييم الأهمية", "Note_Msg_Moved_To_Archived": "ملاحظة: يمكنك إيجاد التقرير في \"أرشيف التقارير\"", "No_One_Can_Edit_It": "لا يمكن تعديله", "No_Files_Uploaded": "لا يوجد ملفات مرفقة", "Evidences": "الأدلة", "Forwarded_To_PDDirector": "أرسلت للمدير", "Add_File": "إضافة ملف", "Can_Edit_It": "يمكنه القيام بالتعديل", "Read_Before_The_Date": "يقرأ قبل تاريخ", "Date": "التاريخ", "Only": "فقط", "Subject": "الموضوع", "AM_Archived": 'أرشيف التقارير', "ASSISTANTMINISTER": "Assistant Minister", "For_AM_Review": "تقارير بانتظار المراجعة" };
window.Constants = { API_ROOT: '', DASHBOARD_ROOT: '', PERFORMANCE_DASHBOARD_ACCESS_TOKEN: '' }