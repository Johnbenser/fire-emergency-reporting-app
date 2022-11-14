.class public Lio/cordova/myappd8f5b38e89b34787b64d9a3522b23493/MainActivity;
.super Lorg/apache/cordova/CordovaActivity;
.source "MainActivity.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .prologue
    .line 25
    invoke-direct {p0}, Lorg/apache/cordova/CordovaActivity;-><init>()V

    return-void
.end method


# virtual methods
.method public onCreate(Landroid/os/Bundle;)V
    .locals 1
    .param p1, "savedInstanceState"    # Landroid/os/Bundle;

    .prologue
    .line 30
    invoke-super {p0, p1}, Lorg/apache/cordova/CordovaActivity;->onCreate(Landroid/os/Bundle;)V

    .line 31
    invoke-super {p0}, Lorg/apache/cordova/CordovaActivity;->init()V

    .line 33
    iget-object v0, p0, Lio/cordova/myappd8f5b38e89b34787b64d9a3522b23493/MainActivity;->launchUrl:Ljava/lang/String;

    invoke-virtual {p0, v0}, Lio/cordova/myappd8f5b38e89b34787b64d9a3522b23493/MainActivity;->loadUrl(Ljava/lang/String;)V

    .line 34
    return-void
.end method
