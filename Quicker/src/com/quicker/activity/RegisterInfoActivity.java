package com.quicker.activity;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

import com.quicker.R;



public class RegisterInfoActivity extends Activity {
	private Context mContext;
	private Button btn_complete;
	//private TitleBarView mTitleBarView;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.register2);
		mContext=this;
		findView();
		Log.d("RegisterInfoActivity", "start");

		//initTitleView();
		init();
		
	}
	
	private void findView(){
		//mTitleBarView=(TitleBarView) findViewById(R.id.title_bar);
		btn_complete=(Button) findViewById(R.id.register_complete);
	}
	
	private void init(){
		btn_complete.setOnClickListener(completeOnClickListener);
	}
	
	/*private void initTitleView(){
		mTitleBarView.setCommonTitle(View.VISIBLE, View.VISIBLE,View.GONE, View.GONE);
		mTitleBarView.setTitleText(R.string.title_register_info);
		mTitleBarView.setBtnLeft(R.drawable.boss_unipay_icon_back, R.string.back);
		mTitleBarView.setBtnLeftOnclickListener(new OnClickListener() {	
			@Override
			public void onClick(View v) {
				finish();
				
			}
		});
	}*/
	
	private OnClickListener completeOnClickListener=new OnClickListener() {
		
		@Override
		public void onClick(View v) {
		   Intent intent=new Intent(mContext, RegisterResultActivity.class);
		   startActivity(intent);
		}
	};

}
